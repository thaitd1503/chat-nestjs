import { HttpException } from '@nestjs/common';
export declare class ReturnException extends HttpException {
    constructor(response: string | object, statusCode: number);
}
