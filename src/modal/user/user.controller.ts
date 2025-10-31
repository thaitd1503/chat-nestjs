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
import { MailService } from '@/mail/mail.service';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private mailService: MailService,
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
    const payloadUser = {
      ...user,
      status: 'pending',
      otp_secret: Math.floor(1000000000 + Math.random() * 9000000000).toString(),
      time_otp: new Date().toISOString(),
    };
    // check email exists
    const existingUser = await this.userService.findOne(payloadUser.email);
    if (existingUser) {
      throw new ReturnException('Email already exists', 500);
    }
    // send mail welcome and link verify
    await this.mailService.sendWelcomeTemplate(payloadUser.email, payloadUser.username, payloadUser.otp_secret);

    return this.userService.createUser(payloadUser);
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
