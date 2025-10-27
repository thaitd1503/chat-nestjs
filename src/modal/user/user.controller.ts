import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from '@/modal/user/users.service';
import { User } from '@/modal/user/user.entity';
import { ApiBody, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { ReturnException } from '@/common/custom.exception';
import { ApiResponse, createApiResponse } from '@/utils/reponse.util';
import { CreatUserDto, GetUserDto } from '@/modal/user/user.dto';
import { plainToInstance } from 'class-transformer';
import { Pagination } from 'nestjs-typeorm-paginate';
import { decodeToken } from '@/utils/decode.util';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@/auth/auth.guard';
import { Request } from 'express';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get()
  async getAllUser(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('name') userName: string,
    @Req() request: Request,
  ): Promise<Pagination<GetUserDto>> {
    const userFromToken = decodeToken(request, this.jwtService);

    const usersPage: Pagination<User> = await this.userService.findAll(
      { page, limit },
      userName,
      userFromToken['user_id'],
    );
    const usersDto = plainToInstance(GetUserDto, usersPage.items, { excludeExtraneousValues: true });
    return {
      ...usersPage,
      items: usersDto,
    };
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get('get-by-id')
  async findById(@Req() request: Request): Promise<GetUserDto> {
    const userFromToken = decodeToken(request, this.jwtService);
    const user = await this.userService.findById(userFromToken['user_id']);
    return plainToInstance(GetUserDto, user, { excludeExtraneousValues: true });
  }

  @Post()
  @ApiBody({ type: CreatUserDto })
  async createUser(@Body() user: CreatUserDto): Promise<User> {
    return this.userService.createUser(user);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Put('update-user/:id')
  @ApiBody({
    type: CreatUserDto,
  })
  async updateUser(
    @Req() request: Request,
    @Body() userUpdate: User,
    @Param('id') id: number,
  ): Promise<ApiResponse<User>> {
    try {
      const userFromToken = decodeToken(request, this.jwtService);
      return createApiResponse(await this.userService.updateUser(userFromToken['user_id'], userUpdate));
    } catch (error) {
      throw new ReturnException('Please check: ' + error.message, 500);
    }
  }
}
