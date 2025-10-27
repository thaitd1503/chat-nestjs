import { Repository } from 'typeorm';
import { Conversations } from '@/modal';
import { CreateConversationDto, GetListConversationDto } from '@/modal/conversations/conversations.dto';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
export declare class ConversationsService {
    private readonly conversationRepository;
    constructor(conversationRepository: Repository<Conversations>);
    findAll(): Promise<Conversations[]>;
    getListConversations(options: IPaginationOptions, userId: number): Promise<Pagination<GetListConversationDto>>;
    getConversationWithUserInfo(userId: number): Promise<any>;
    findById(id: number): Promise<Conversations | null>;
    createConversation(conversation: Partial<CreateConversationDto>): Promise<Conversations>;
    remove(id: number): Promise<void>;
    updateConversation(id: number, conversationUpdate: Partial<Conversations>): Promise<Conversations>;
}
