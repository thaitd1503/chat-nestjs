// utils/decode-token.ts
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

export function decodeToken(request: Request, jwtService: JwtService): any {
  const authHeader = request.headers['authorization'];
  if (!authHeader) {
    throw new Error('Authorization header missing');
  }

  const token = authHeader.replace('Bearer ', '');
  return jwtService.decode(token);
}
