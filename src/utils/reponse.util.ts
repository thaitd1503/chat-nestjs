import { HttpStatus } from '@nestjs/common';

export function createApiResponse<T>(data: T, statusCode: number = HttpStatus.OK) {
  return {
    data,
    statusCode,
  };
}
export class ApiResponse<T> {
  data: T;
  statusCode: number;
}
