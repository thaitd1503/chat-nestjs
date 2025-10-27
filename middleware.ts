import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class DomainMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const allowedDomains = [
      'localhost:9999',
      'tranduythai.id.vn',
      'api.thaitd.io.vn',
      'api.tranduythai.id.vn',
      'http://103.38.237.87/',
    ];
    const host = req.headers.host;

    if (allowedDomains.includes(host)) {
      next();
    } else {
      res.status(403).send('Forbidden: Invalid Domain');
    }
  }
}

// adapters/authenticated-socket-io.adapter.ts
import { IoAdapter } from '@nestjs/platform-socket.io';
import { INestApplication } from '@nestjs/common';
import { ServerOptions } from 'socket.io';
import * as jwt from 'jsonwebtoken';

export class AuthenticatedSocketIoAdapter extends IoAdapter {
  constructor(private app: INestApplication) {
    super(app);
  }

  createIOServer(port: number, options?: ServerOptions) {
    const server = super.createIOServer(port, options);

    // middleware cho namespace group-chat
    server.of('/group-chat').use((socket, next) => {
      try {
        const token = socket.handshake.auth?.token || socket.handshake.headers?.authorization?.split(' ')[1];

        if (!token) {
          return next(new Error('Unauthorized'));
        }

        const payload = jwt.verify(token, process.env.secret_key);
        (socket as any).user = payload; // 👈 gắn user vào socket

        next();
      } catch (err) {
        console.log('Socket auth error:', err.message);
        next(new Error('Unauthorized'));
      }
    });

    return server;
  }
}
