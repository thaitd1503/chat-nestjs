import { ApiProperty } from '@nestjs/swagger';

export class createRoleDto {
  @ApiProperty()
  role_name: string;
}
