import { ConversationsService } from '@/modal/conversations/conversations.service';
import { Server, Socket } from 'socket.io';
import { ConversationUsersService } from '@/modal/conversation-users/conversationUsers.service';
import { MessagesService } from '@/modal/messages/messages.service';
export declare class GroupChatGateway {
    private readonly conversationService;
    private readonly conversationUserService;
    private readonly messagesService;
    server: Server;
    constructor(conversationService: ConversationsService, conversationUserService: ConversationUsersService, messagesService: MessagesService);
    handleConnection(client: Socket): Promise<void>;
    handleDisconnect(client: Socket): Promise<void>;
    handleCreateGroup(client: Socket, data: any): Promise<void>;
    handleMessageSend(client: Socket, data: any): Promise<void>;
}
