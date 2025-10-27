import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageStatus } from '@/modal';

@Module({
  imports: [TypeOrmModule.forFeature([MessageStatus])],
  exports: [TypeOrmModule],
})
export class MessageStatusModule {}
