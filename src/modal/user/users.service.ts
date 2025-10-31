import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@/modal';
import { CreatUserDto } from '@/modal/user/user.dto';
import * as bcrypt from 'bcrypt';
import { paginate, IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findAll(options: IPaginationOptions, userName?: string, userId?: number): Promise<Pagination<User>> {
    const queryBuilder = this.usersRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.role', 'role')
      .where('user.user_id != :userId', { userId });

    if (userName) {
      queryBuilder.where('user.username LIKE :userName', { userName: `%${userName}%` });
    }

    return paginate<User>(queryBuilder, options);
  }

  async findOne(email: string): Promise<User | null> {
    return this.usersRepository.findOne({
      where: { email },
      relations: ['role'], // Include the role relation
    });
  }

  async findById(id: number): Promise<User | null> {
    return this.usersRepository.findOne({ where: { user_id: id } });
  }
  async getUserByIds(userIds: number[]): Promise<User[]> {
    return this.usersRepository
      .createQueryBuilder('user')
      .where('user.user_id IN (:...userIds)', { userIds })
      .getMany();
  }

  async createUser(user: CreatUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    const userPayload = this.usersRepository.create({
      ...user,
      password_hash: hashedPassword,
      role_id: 2,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });
    return this.usersRepository.save(userPayload);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async updateUser(id: number, userUpdate: Partial<User>): Promise<User> {
    await this.usersRepository.update(id, userUpdate);
    return this.usersRepository.findOneBy({ user_id: id });
  }
}
