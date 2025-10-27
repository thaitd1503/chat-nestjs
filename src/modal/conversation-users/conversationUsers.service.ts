import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConversationUsers } from '@/modal';
import { Not, Repository } from 'typeorm';
import { CreateConversationUserDto } from '@/modal/conversation-users/conversationUser.dto';

@Injectable()
export class ConversationUsersService {
  constructor(
    @InjectRepository(ConversationUsers)
    private readonly conversationUsersRepository: Repository<ConversationUsers>,
  ) {}

  async findAll(): Promise<ConversationUsers[]> {
    return this.conversationUsersRepository.find({ relations: ['user', 'conversations'] });
  }
  async findById(id: number): Promise<ConversationUsers | null> {
    return this.conversationUsersRepository.findOne({
      where: { conversation_user_id: id },
      relations: ['user', 'conversations'],
    });
  }
  async createConversationUser(conversationUser: Partial<CreateConversationUserDto>): Promise<ConversationUsers> {
    const newConversationUser = this.conversationUsersRepository.create(conversationUser);
    return this.conversationUsersRepository.save(newConversationUser);
  }

  async getConversationUserByConversationId(conversationId: number, userId: number): Promise<any> {
    const conversationUsers = await this.conversationUsersRepository.find({
      where: { conversation_id: conversationId, user_id: Not(userId) },
    });
    return conversationUsers.map((cu) => cu.user_id);
  }

  async remove(id: number): Promise<void> {
    await this.conversationUsersRepository.delete(id);
  }

  async updateConversationUser(
    id: number,
    conversationUserUpdate: Partial<ConversationUsers>,
  ): Promise<ConversationUsers> {
    await this.conversationUsersRepository.update(id, conversationUserUpdate);
    return this.conversationUsersRepository.findOneBy({ conversation_user_id: id });
  }

  async findConversationByUserIds(userIds: number[]): Promise<ConversationUsers[]> {
    return this.conversationUsersRepository
      .createQueryBuilder('conversationUser')
      .where('conversationUser.user_id IN (:...userIds)', { userIds })
      .getMany();
  }

  async findUserOtherOfConversation(conversationId: number, userId: number): Promise<ConversationUsers | null> {
    return this.conversationUsersRepository.findOne({
      where: { conversation_id: conversationId, user_id: Not(userId) },
      relations: ['user'],
    });
  }

  async getUsersInConversation(conversationId: number): Promise<ConversationUsers[]> {
    return this.conversationUsersRepository.find({
      where: { conversation_id: conversationId },
      relations: ['user'],
    });
  }

  async checkIfConversationExists(userIds: number[]): Promise<number | null> {
    // Find conversations that contain any of the specified users
    const conversationUsers = await this.conversationUsersRepository
      .createQueryBuilder('conversationUser')
      .where('conversationUser.user_id IN (:...userIds)', { userIds })
      .getMany();

    // Group by conversation_id and count users
    const conversationCounts = new Map<number, Set<number>>();

    conversationUsers.forEach((cu) => {
      if (!conversationCounts.has(cu.conversation_id)) {
        conversationCounts.set(cu.conversation_id, new Set());
      }
      const userSet = conversationCounts.get(cu.conversation_id);
      if (userSet) {
        userSet.add(cu.user_id);
      }
    });

    // Check if any conversation has exactly the same users
    for (const [conversationId, users] of conversationCounts) {
      if (users.size === userIds.length && userIds.every((id) => users.has(id))) {
        return conversationId;
      }
    }

    return null;
  }
}
