import { Conversations } from '@/modal';
import { ConversationsService } from '@/modal/conversations/conversations.service';
import { CreateConversationDto } from '@/modal/conversations/conversations.dto';
import { ConversationUsersService } from '@/modal/conversation-users/conversationUsers.service';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { UsersService } from '@/modal/user/users.service';
import { Pagination } from 'nestjs-typeorm-paginate';
import { GetListConversationDto } from './conversations.dto';
export declare class ConversationsController {
    private readonly conversationService;
    private readonly conversationUserService;
    private readonly usersService;
    private readonly jwtService;
    constructor(conversationService: ConversationsService, conversationUserService: ConversationUsersService, usersService: UsersService, jwtService: JwtService);
    createConversation(conversation: CreateConversationDto): Promise<Conversations>;
    getConversationsByUserIds(body: CreateConversationDto, request: Request): Promise<any>;
    getListConversations(page: number, limit: number, request: Request): Promise<Pagination<GetListConversationDto>>;
}
