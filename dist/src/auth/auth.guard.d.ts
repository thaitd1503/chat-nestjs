import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { BlacklistService } from '@/auth/token.service';
export declare class AuthGuard implements CanActivate {
    private readonly jwtService;
    private readonly reflector;
    private readonly blacklistService;
    constructor(jwtService: JwtService, reflector: Reflector, blacklistService: BlacklistService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeader;
}
