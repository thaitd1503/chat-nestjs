import { HttpException } from '@nestjs/common';

export class ReturnException extends HttpException {
  constructor(response: string | object, statusCode: number) {
    super(response, statusCode);
  }
}
