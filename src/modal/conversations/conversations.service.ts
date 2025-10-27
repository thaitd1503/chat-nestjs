import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Conversations } from '@/modal';
import { CreateConversationDto, GetListConversationDto } from '@/modal/conversations/conversations.dto';
import { IPaginationOptions, Pagination, paginate } from 'nestjs-typeorm-paginate';
import { plainToInstance } from 'class-transformer';
import { GetUserDto } from '@/modal/user/user.dto';

@Injectable()
export class ConversationsService {
  constructor(
    @InjectRepository(Conversations)
    private readonly conversationRepository: Repository<Conversations>,
  ) {}

  async findAll(): Promise<Conversations[]> {
    return this.conversationRepository.find();
  }

  async getListConversations(options: IPaginationOptions, userId: number): Promise<Pagination<GetListConversationDto>> {
    // Join only the latest message for each conversation; exclude conversations with no messages
    console.log('User ID in service:', userId); // Debug log to check userId
    const queryBuilder = this.conversationRepository
      .createQueryBuilder('conversations')
      .innerJoin('conversations.conversationUsers', 'cu', 'cu.user_id = :userId', { userId })
      .innerJoinAndSelect(
        'conversations.messages',
        'messages',
        `messages.message_id = (
      SELECT m2.message_id
      FROM messages m2
      WHERE m2.conversation_id = conversations.conversation_id
      ORDER BY m2.created_at DESC
      LIMIT 1
    )`,
      )
      .orderBy('messages.created_at', 'DESC');

    return paginate<Conversations>(queryBuilder, options) as Promise<Pagination<GetListConversationDto>>;
  }

  async getConversationWithUserInfo(userId: number): Promise<any> {
    const conversation = await this.conversationRepository
      .createQueryBuilder('conversations')
      .innerJoin('conversations.conversationUsers', 'cu', 'cu.user_id = :userId', { userId })
      .leftJoinAndSelect('conversations.conversationUsers', 'allCu', 'allCu.user_id != :userId', { userId })
      .leftJoinAndSelect('allCu.user', 'user')
      .innerJoinAndSelect(
        'conversations.messages',
        'messages',
        `messages.message_id = (
        SELECT m2.message_id
        FROM messages m2
        WHERE m2.conversation_id = conversations.conversation_id
        ORDER BY m2.created_at DESC
        LIMIT 1
      )`,
      )
      .orderBy('messages.created_at', 'DESC')
      .getOne();

    if (!conversation) return null;

    // Transform để lấy trực tiếp user info và đổi tên
    const userInfo = conversation.conversationUsers?.[0]?.user || null;

    return {
      ...conversation,
      conversationUsers: null,
      userInfo: userInfo ? plainToInstance(GetUserDto, userInfo, { excludeExtraneousValues: true }) : null,
    };
  }

  async findById(id: number): Promise<Conversations | null> {
    return this.conversationRepository.findOne({
      where: { conversation_id: id },
    });
  }

  async createConversation(conversation: Partial<CreateConversationDto>): Promise<Conversations> {
    const newConversation = this.conversationRepository.create({
      ...conversation,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });
    return this.conversationRepository.save(newConversation);
  }

  async remove(id: number): Promise<void> {
    await this.conversationRepository.delete(id);
  }

  async updateConversation(id: number, conversationUpdate: Partial<Conversations>): Promise<Conversations> {
    await this.conversationRepository.update(id, conversationUpdate);
    return this.conversationRepository.findOneBy({ conversation_id: id });
  }
}
