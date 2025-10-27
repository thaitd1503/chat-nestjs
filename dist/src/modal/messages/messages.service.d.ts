import { Messages } from '@/modal';
import { CreateMessageDto } from './messages.dto';
import { Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';
export declare class MessagesService {
    private readonly messagesRepository;
    constructor();
    createMessage(payload: CreateMessageDto): Promise<Messages>;
    findMessagesByConversation(options: IPaginationOptions, conversationId: number): Promise<Pagination<Messages>>;
}
