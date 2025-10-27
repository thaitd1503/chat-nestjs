import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from '@/auth/constants';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';
import { ReturnException } from '@/common/custom.exception';
import { BlacklistService } from '@/auth/token.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
    private readonly blacklistService: BlacklistService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }

    if (token) {
      await this.jwtService
        .verifyAsync(token, {
          secret: process.env.JWT_SECRET,
        })
        .catch(() => {
          throw new UnauthorizedException();
        });
    }

    const payload = await this.jwtService.verifyAsync(token, {
      secret: jwtConstants.secret,
    });
    const roles = this.reflector.get<string[]>('role', context.getHandler());

    // Check if token is blacklisted
    const isBlacklisted = await this.blacklistService.isBlacklisted(token);
    if (isBlacklisted) {
      throw new ReturnException('Token has been blacklisted', 401);
    }

    // Check if user has the required role
    if (roles && !roles.includes(payload.roleId)) {
      throw new ReturnException('You do not have permission to access', 403);
    }
    request['user'] = payload;
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
