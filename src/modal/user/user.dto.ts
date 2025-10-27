import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';

export class CreatUserDto {
  @ApiProperty()
  username?: string;

  @ApiProperty()
  email?: string;

  @ApiProperty()
  password?: string;

  @ApiProperty()
  avatar_url?: string;
}

export class GetUserDto {
  @ApiProperty()
  @Expose()
  user_id: number;

  @ApiProperty()
  @Expose()
  username: string;

  @ApiProperty()
  @Expose()
  email: string;

  @ApiProperty()
  @Expose()
  @Transform(({ value }) => {
    if (!value) return value;
    if (/^https?:\/\//i.test(value)) return value;
    const clean = String(value).replace(/^\/+/, '');
    return `${process.env.domain}${clean}`;
  })
  avatar_url: string;

  @ApiProperty()
  @Expose()
  created_at: string;

  @ApiProperty()
  @Expose()
  updated_at: string;

  @ApiProperty()
  @Expose()
  @Transform(({ obj }) => obj.role?.role_name) // lấy trực tiếp từ quan hệ role
  role_name: string;
}
