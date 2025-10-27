import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Messages } from '@/modal';
import { CreateMessageDto } from './messages.dto';
import { Pagination, IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';

@Injectable()
export class MessagesService {
  @InjectRepository(Messages) private readonly messagesRepository: Repository<Messages>;
  constructor() {}

  // Add your service methods here
  async createMessage(payload: CreateMessageDto): Promise<Messages> {
    const body = {
      ...payload,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    const message = this.messagesRepository.create(body);
    return this.messagesRepository.save(message);
  }

  async findMessagesByConversation(options: IPaginationOptions, conversationId: number): Promise<Pagination<Messages>> {
    const queryBuilder = this.messagesRepository.createQueryBuilder('messages').orderBy('messages.created_at', 'DESC');
    queryBuilder.where('messages.conversation_id = :conversationId', { conversationId });
    const paginated = await paginate<Messages>(queryBuilder, options);
    return {
      ...paginated,
      items: [...paginated.items].reverse(),
    };
  }
  //   async deleteMessage(messageId: string): Promise<void> {
  //     await this.messagesRepository.delete(messageId);
  //   }
  //   async updateMessage(messageId: string, content: string): Promise<Messages> {
  //     await this.messagesRepository.update(messageId, { content });
  //     return this.messagesRepository.findOneBy({ messageId });
  //   }
}
