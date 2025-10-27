import { ApiProperty } from '@nestjs/swagger';

export class CreateConversationDto {
  @ApiProperty()
  is_group: boolean;

  @ApiProperty({ nullable: true })
  group_id: number;

  @ApiProperty()
  memberId: number[];
}

export class GetListConversationDto {
  @ApiProperty()
  conversation_id: number;

  @ApiProperty()
  created_at: string;

  @ApiProperty()
  group_id: number;

  @ApiProperty()
  is_group: boolean;

  @ApiProperty()
  updated_at: string;

  @ApiProperty()
  messages: any[];

  @ApiProperty()
  userInfo?: any;
}
