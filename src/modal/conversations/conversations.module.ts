import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conversations } from '@/modal';
import { ConversationsController } from '@/modal/conversations/conversations.controller';
import { ConversationsService } from '@/modal/conversations/conversations.service';

@Module({
  imports: [TypeOrmModule.forFeature([Conversations])],
  exports: [TypeOrmModule],
  controllers: [ConversationsController],
  providers: [ConversationsService],
})
export class ConversationsModule {}
