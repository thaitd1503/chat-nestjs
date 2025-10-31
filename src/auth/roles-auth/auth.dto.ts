import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ default: 'duythai010305@gmail.com' })
  email: string;

  @ApiProperty({ default: 'Thai2003@' })
  password: string;
}

export class VerifyOtpDto {
  @ApiProperty({ default: '' })
  email: string;

  @ApiProperty({ default: '' })
  otp: string;
}
