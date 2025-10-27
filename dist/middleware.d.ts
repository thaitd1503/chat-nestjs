import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export declare class DomainMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): void;
}
import { IoAdapter } from '@nestjs/platform-socket.io';
import { INestApplication } from '@nestjs/common';
import { ServerOptions } from 'socket.io';
export declare class AuthenticatedSocketIoAdapter extends IoAdapter {
    private app;
    constructor(app: INestApplication);
    createIOServer(port: number, options?: ServerOptions): any;
}
