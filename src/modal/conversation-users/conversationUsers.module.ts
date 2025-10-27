import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConversationUsers } from '@/modal';
import { ConversationUserController } from '@/modal/conversation-users/conversationUser.controller';
import { ConversationUsersService } from '@/modal/conversation-users/conversationUsers.service';

@Module({
  imports: [TypeOrmModule.forFeature([ConversationUsers])],
  exports: [TypeOrmModule],
  controllers: [ConversationUserController],
  providers: [ConversationUsersService],
})
export class ConversationUsersModule {}
