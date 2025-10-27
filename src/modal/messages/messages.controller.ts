import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { Messages } from '@/modal';
import { CreateMessageDto } from './messages.dto';
import { MessagesService } from './messages.service';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { AuthGuard } from '@/auth/auth.guard';

@Controller('messages')
@ApiTags('Messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  async create(@Body() createMessageDto: CreateMessageDto): Promise<Messages> {
    return this.messagesService.createMessage(createMessageDto);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get(':conversationId')
  async findByConversation(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Param('conversationId') conversationId: number,
  ): Promise<Pagination<Messages>> {
    const res = await this.messagesService.findMessagesByConversation({ page, limit }, conversationId);
    return res;
  }

  //   @Delete(':messageId')
  //   async delete(@Param('messageId') messageId: string): Promise<void> {
  //     return this.messagesService.deleteMessage(messageId);
  //   }

  //   @Put(':messageId')
  //   async update(@Param('messageId') messageId: string, @Body('content') content: string): Promise<Messages> {
  //     return this.messagesService.updateMessage(messageId, content);
  //   }
}
