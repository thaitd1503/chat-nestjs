import { UsersService } from '@/modal/user/users.service';
import { User } from '@/modal/user/user.entity';
import { ApiResponse } from '@/utils/reponse.util';
import { CreatUserDto, GetUserDto } from '@/modal/user/user.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { MailService } from '@/mail/mail.service';
export declare class UserController {
    private readonly userService;
    private readonly jwtService;
    private mailService;
    constructor(userService: UsersService, jwtService: JwtService, mailService: MailService);
    getAllUser(page: number, limit: number, userName: string, request: Request): Promise<Pagination<GetUserDto>>;
    findById(request: Request): Promise<GetUserDto>;
    createUser(user: CreatUserDto): Promise<User>;
    updateUser(request: Request, userUpdate: User, id: number): Promise<ApiResponse<User>>;
}
