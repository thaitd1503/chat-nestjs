import { AuthService } from '@/auth/auth.service';
import { BlacklistService } from '@/auth/token.service';
import { LoginDto } from '@/auth/roles-auth/auth.dto';
export declare class AuthController {
    private readonly authService;
    private readonly blacklistService;
    constructor(authService: AuthService, blacklistService: BlacklistService);
    signIn(login: LoginDto): Promise<{
        access_token: string;
        user_id: number;
    }>;
}
