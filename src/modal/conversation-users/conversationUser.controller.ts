import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { ConversationUsersService } from '@/modal/conversation-users/conversationUsers.service';
import { CreateConversationUserDto } from '@/modal/conversation-users/conversationUser.dto';
import { ConversationUsers } from '@/modal';
import { AuthGuard } from '@/auth/auth.guard';
import { Request } from 'express';
import { decodeToken } from '@/utils/decode.util';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '@/modal/user/users.service';
import { plainToInstance } from 'class-transformer';
import { GetUserDto } from '@/modal/user/user.dto';

@Controller('conversation-user')
@ApiTags('Conversation Users')
export class ConversationUserController {
  constructor(
    private readonly conversationUsersService: ConversationUsersService,
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  @Post()
  @ApiBody({ type: CreateConversationUserDto })
  async createUser(@Body() conversationUser: CreateConversationUserDto): Promise<ConversationUsers> {
    return this.conversationUsersService.createConversationUser(conversationUser);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get(':conversationId')
  async getConversationUserByConversationId(
    @Param('conversationId') conversationId: number,
    @Req() request: Request,
  ): Promise<any> {
    const userFromToken = decodeToken(request, this.jwtService);
    const cvInfo = await this.conversationUsersService.getConversationUserByConversationId(
      conversationId,
      userFromToken['user_id'],
    );
    const userIds = await this.usersService.getUserByIds(cvInfo);
    return plainToInstance(GetUserDto, userIds, { excludeExtraneousValues: true });
  }
}
