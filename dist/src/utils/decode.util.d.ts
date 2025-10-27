import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
export declare function decodeToken(request: Request, jwtService: JwtService): any;
