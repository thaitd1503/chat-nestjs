import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@/modal/user/user.entity';
import { UsersService } from '@/modal/user/users.service';
import { UserController } from '@/modal/user/user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UsersService],
  exports: [TypeOrmModule],
})
export class UsersModule {}
