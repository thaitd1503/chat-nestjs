import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThan, Repository } from 'typeorm';
import { BlacklistedToken } from '@/auth/token.entity';
import * as jwt from 'jsonwebtoken';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class BlacklistService {
  constructor(
    @InjectRepository(BlacklistedToken)
    private readonly blacklistRepo: Repository<BlacklistedToken>,
  ) {}

  // Thêm token vào blacklist
  async blacklistToken(token: string) {
    const expiresAt = this.getTokenExpiry(token);
    await this.blacklistRepo.save({ token, expiresAt });
  }

  // Kiểm tra token có nằm trong blacklist không
  async isBlacklisted(token: string): Promise<boolean> {
    const blacklistedToken = await this.blacklistRepo.findOne({
      where: { token },
    });
    return !!blacklistedToken;
  }

  // Giải mã và lấy thời gian hết hạn của token
  private getTokenExpiry(token: string): Date {
    const decoded = jwt.decode(token) as any;
    return new Date(decoded.exp * 1000);
  }

  @Cron('0 * * * *') // Chạy mỗi đầu giờ
  // @Cron("* * * * *") // Chạy mỗi phút
  async cleanupExpiredTokens() {
    const now = new Date();
    await this.blacklistRepo.delete({ expiresAt: LessThan(now) });
    console.log('Expired tokens cleaned up');
  }
}
