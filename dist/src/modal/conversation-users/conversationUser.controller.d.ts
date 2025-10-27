import { ConversationUsersService } from '@/modal/conversation-users/conversationUsers.service';
import { CreateConversationUserDto } from '@/modal/conversation-users/conversationUser.dto';
import { ConversationUsers } from '@/modal';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '@/modal/user/users.service';
export declare class ConversationUserController {
    private readonly conversationUsersService;
    private readonly jwtService;
    private readonly usersService;
    constructor(conversationUsersService: ConversationUsersService, jwtService: JwtService, usersService: UsersService);
    createUser(conversationUser: CreateConversationUserDto): Promise<ConversationUsers>;
    getConversationUserByConversationId(conversationId: number, request: Request): Promise<any>;
}
