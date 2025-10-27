import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Post, Req, UseGuards, ParseIntPipe, DefaultValuePipe, Query } from '@nestjs/common';
import { Conversations } from '@/modal';
import { ConversationsService } from '@/modal/conversations/conversations.service';
import { CreateConversationDto } from '@/modal/conversations/conversations.dto';
import { ConversationUsersService } from '@/modal/conversation-users/conversationUsers.service';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@/auth/auth.guard';
import { decodeToken } from '@/utils/decode.util';
import { Request } from 'express';
import { UsersService } from '@/modal/user/users.service';
import { plainToInstance } from 'class-transformer';
import { GetUserDto } from '@/modal/user/user.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { GetListConversationDto } from './conversations.dto';

@Controller('conversations')
@ApiTags('Conversation')
export class ConversationsController {
  constructor(
    private readonly conversationService: ConversationsService,
    private readonly conversationUserService: ConversationUsersService,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  @Post()
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiBody({ type: CreateConversationDto })
  async createConversation(@Body() conversation: CreateConversationDto): Promise<Conversations> {
    return this.conversationService.createConversation(conversation);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Post('create-conversation')
  @ApiBody({ type: CreateConversationDto })
  async getConversationsByUserIds(@Body() body: CreateConversationDto, @Req() request: Request): Promise<any> {
    // Get user_id from token
    const userFromToken = decodeToken(request, this.jwtService);
    const allUserIds = [...body.memberId, userFromToken['user_id']];

    // Check if conversation with exactly these users already exists
    const existingConversationId = await this.conversationUserService.checkIfConversationExists(allUserIds);

    if (existingConversationId) {
      // Return existing conversation if found
      // return user info with user_id = body.memberId
      const user = await this.usersService.findById(body.memberId[0]);
      return {
        ...plainToInstance(GetUserDto, user, { excludeExtraneousValues: true }),
        conversation_id: existingConversationId,
      };
    }

    // Create new conversation if none exists
    const res = await this.conversationService.createConversation(body);

    // Create conversation-user relationships for all members
    for (const userId of allUserIds) {
      await this.conversationUserService.createConversationUser({
        conversation_id: res.conversation_id,
        user_id: userId,
      });
    }

    // return user info GetUserDto with this.usersService.findById(body.memberId[0]);
    const user = await this.usersService.findById(body.memberId[0]);

    return {
      ...plainToInstance(GetUserDto, user, { excludeExtraneousValues: true }),
      conversation_id: res.conversation_id,
    };
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get()
  async getListConversations(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Req() request: Request,
  ): Promise<Pagination<GetListConversationDto>> {
    const userFromToken = decodeToken(request, this.jwtService);
    const userId = userFromToken['user_id'];
    const lstCv: Pagination<GetListConversationDto> = await this.conversationService.getListConversations(
      {
        page,
        limit,
      },
      userId,
    );

    await Promise.all(
      lstCv.items.map(async (item) => {
        const userOfConversation = await this.conversationUserService.findUserOtherOfConversation(
          item.conversation_id,
          userId,
        );
        item.userInfo = plainToInstance(GetUserDto, userOfConversation?.user, { excludeExtraneousValues: true });
      }),
    );
    return lstCv;
  }
}
