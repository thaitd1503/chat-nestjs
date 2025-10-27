import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto {
  @ApiProperty()
  conversation_id: number;

  @ApiProperty()
  sender_id: number;

  @ApiProperty()
  message_text: string;

  @ApiProperty()
  message_type: string;

  @ApiProperty()
  created_at: string;

  @ApiProperty()
  updated_at: string;
}
