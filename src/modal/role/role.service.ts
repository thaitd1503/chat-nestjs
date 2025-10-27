import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from '@/modal/role/role.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}

  async findAll(): Promise<Role[]> {
    return this.roleRepository.find();
  }

  // creat Role
  async createRole(role: Role): Promise<Role> {
    return this.roleRepository.save(role);
  }

  async getRoleById(idRole: number): Promise<Role> {
    return this.roleRepository.findOne({ where: { role_id: idRole } });
  }
}
