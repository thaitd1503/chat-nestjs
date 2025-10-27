import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleController } from './role.controller';
import { Role } from '@/modal/role/role.entity';
import { RoleService } from './role.service';
@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  controllers: [RoleController],
  providers: [RoleService],
  exports: [TypeOrmModule],
})
export class RoleModule {}
