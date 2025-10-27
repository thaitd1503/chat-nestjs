import { ConversationUsers } from '@/modal';
import { Repository } from 'typeorm';
import { CreateConversationUserDto } from '@/modal/conversation-users/conversationUser.dto';
export declare class ConversationUsersService {
    private readonly conversationUsersRepository;
    constructor(conversationUsersRepository: Repository<ConversationUsers>);
    findAll(): Promise<ConversationUsers[]>;
    findById(id: number): Promise<ConversationUsers | null>;
    createConversationUser(conversationUser: Partial<CreateConversationUserDto>): Promise<ConversationUsers>;
    getConversationUserByConversationId(conversationId: number, userId: number): Promise<any>;
    remove(id: number): Promise<void>;
    updateConversationUser(id: number, conversationUserUpdate: Partial<ConversationUsers>): Promise<ConversationUsers>;
    findConversationByUserIds(userIds: number[]): Promise<ConversationUsers[]>;
    findUserOtherOfConversation(conversationId: number, userId: number): Promise<ConversationUsers | null>;
    getUsersInConversation(conversationId: number): Promise<ConversationUsers[]>;
    checkIfConversationExists(userIds: number[]): Promise<number | null>;
}
