import { UsersService } from '@/modal/user/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '@/auth/roles-auth/auth.dto';
import { MailService } from '@/mail/mail.service';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    private mailService;
    constructor(usersService: UsersService, jwtService: JwtService, mailService: MailService);
    LogIn(login: LoginDto): Promise<{
        access_token: string;
        user_id: number;
    }>;
}
