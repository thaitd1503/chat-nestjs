import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { RoleService } from './role.service';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { Role } from '@/modal/role/role.entity';
import { AuthGuard } from '@/auth/auth.guard';
import { Roles } from '@/auth/roles-auth/roles.decorator';
import { createRoleDto } from '@/modal/role/role.dto';

@Controller('role')
@ApiTags('Role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @UseGuards(AuthGuard)
  @Roles('ADMIN', 'USER')
  @ApiBearerAuth()
  @Get('GetAll')
  getAllRole(): Promise<Role[]> {
    return this.roleService.findAll();
  }

  @ApiBody({ type: createRoleDto })
  @Post('CreateRole')
  createRole(@Body() role: Role): Promise<Role> {
    return this.roleService.createRole(role);
  }

  @Get('FindRoleById/:id')
  getRoleById(@Param('id') id: number): Promise<Role> {
    return this.roleService.getRoleById(id);
  }
}
