import { UsersService } from '@/modal/user/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '@/auth/roles-auth/auth.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    LogIn(login: LoginDto): Promise<{
        access_token: string;
        user_id: number;
    }>;
}
