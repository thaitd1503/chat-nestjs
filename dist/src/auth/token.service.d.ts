import { Repository } from 'typeorm';
import { BlacklistedToken } from '@/auth/token.entity';
export declare class BlacklistService {
    private readonly blacklistRepo;
    constructor(blacklistRepo: Repository<BlacklistedToken>);
    blacklistToken(token: string): Promise<void>;
    isBlacklisted(token: string): Promise<boolean>;
    private getTokenExpiry;
    cleanupExpiredTokens(): Promise<void>;
}
