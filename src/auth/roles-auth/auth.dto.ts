import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ default: 'duythai010305@gmail.com' })
  email: string;

  @ApiProperty({ default: 'Thai2003@' })
  password: string;
}
