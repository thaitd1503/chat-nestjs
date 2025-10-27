import { ApiProperty } from '@nestjs/swagger';

export class CreateConversationUserDto {
  @ApiProperty()
  conversation_id: number;

  @ApiProperty()
  user_id: number;
}
