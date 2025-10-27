import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from '@/modal/user/user.controller';
import { UsersService } from './modal/user/users.service';
import { User, Role, Groups, GroupMembers, Conversations, ConversationUsers, Messages, MessageStatus } from '@/modal';
import * as dotenv from 'dotenv';
import { RoleController } from './modal/role/role.controller';
import { RoleService } from './modal/role/role.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt'; // Import JwtModule
import { BlacklistedToken } from './auth/token.entity';
import { BlacklistService } from './auth/token.service';
import { ScheduleModule } from '@nestjs/schedule';
import { ConversationsService } from '@/modal/conversations/conversations.service';
import { ConversationUsersService } from '@/modal/conversation-users/conversationUsers.service';
import { GroupChatGateway } from '@/modal/websocket/group/group-chat.gateway';
import { DomainMiddleware } from '../middleware';
import { ConversationsController } from '@/modal/conversations/conversations.controller';
import { ConversationUserController } from '@/modal/conversation-users/conversationUser.controller';
import { MessagesController } from './modal/messages/messages.controller';
import { MessagesService } from './modal/messages/messages.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { FilesController } from './modal/upload-files/files.controller';
import { join } from 'path';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '103.38.237.87',
      port: 3306,
      username: 'thaitd',
      password: 'thaitd',
      database: 'chat-db',
      entities: [
        User,
        Role,
        Groups,
        GroupMembers,
        Conversations,
        ConversationUsers,
        Messages,
        MessageStatus,
        BlacklistedToken,
      ],
      synchronize: true,
      retryAttempts: 3,
      retryDelay: 3000,
    }),
    ScheduleModule.forRoot(),
    TypeOrmModule.forFeature([
      User,
      Role,
      Groups,
      GroupMembers,
      Conversations,
      ConversationUsers,
      Messages,
      MessageStatus,
      BlacklistedToken,
    ]),
    JwtModule.register({
      secret: process.env.secret_key, // Replace with your secret key
      signOptions: { expiresIn: '12h' }, // Configure token expiration
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public/uploads'),
      serveRoot: '/uploads',
    }),
  ],
  controllers: [
    RoleController,
    AuthController,
    UserController,
    ConversationsController,
    MessagesController,
    ConversationUserController,
    FilesController,
  ],
  providers: [
    UsersService,
    RoleService,
    AuthService,
    ConversationsService,
    ConversationUsersService,
    MessagesService,
    GroupChatGateway,
    BlacklistService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(DomainMiddleware).forRoutes('*'); // 👈 middleware cho HTTP
  }
}
