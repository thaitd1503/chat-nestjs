import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Groups } from '@/modal/groups/groups.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Groups])],
  exports: [TypeOrmModule],
})
export class GroupsModule {}
