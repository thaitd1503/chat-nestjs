import { Messages } from '@/modal';
import { CreateMessageDto } from './messages.dto';
import { MessagesService } from './messages.service';
import { Pagination } from 'nestjs-typeorm-paginate';
export declare class MessagesController {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    create(createMessageDto: CreateMessageDto): Promise<Messages>;
    findByConversation(page: number, limit: number, conversationId: number): Promise<Pagination<Messages>>;
}
