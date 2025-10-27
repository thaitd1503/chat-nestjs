import { Repository } from 'typeorm';
import { User } from '@/modal';
import { CreatUserDto } from '@/modal/user/user.dto';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(options: IPaginationOptions, userName?: string, userId?: number): Promise<Pagination<User>>;
    findOne(email: string): Promise<User | null>;
    findById(id: number): Promise<User | null>;
    getUserByIds(userIds: number[]): Promise<User[]>;
    createUser(user: CreatUserDto): Promise<User>;
    remove(id: number): Promise<void>;
    updateUser(id: number, userUpdate: Partial<User>): Promise<User>;
}
