import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Messages } from '@/modal';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';

@Module({
  imports: [TypeOrmModule.forFeature([Messages])],
  exports: [TypeOrmModule],
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class MessagesModule {}
