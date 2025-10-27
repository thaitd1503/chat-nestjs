import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('123') // Grouping under 'users'
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Return all users.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/hello')
  getHello2(): string {
    return 'hello';
  }
}
