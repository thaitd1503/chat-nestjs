import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from '@/auth/auth.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { BlacklistService } from '@/auth/token.service';
import { LoginDto } from '@/auth/roles-auth/auth.dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly blacklistService: BlacklistService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiBody({
    type: LoginDto,
  })
  signIn(@Body() login: LoginDto) {
    return this.authService.LogIn(login);
  }

  // @UseGuards(AuthGuard)
  // @ApiBearerAuth()
  // @Post('logout')
  // async logout(@Req() req: Request & { headers: { authorization?: string } }) {
  //   // const token = req.headers.authorization?.split(' ')[1];
  //   const token = '123';
  //   if (!token) {
  //     return { message: 'No token provided' };
  //   }
  //   try {
  //     await this.blacklistService.blacklistToken(token);
  //     return { message: 'Logged out successfully' };
  //   } catch (error) {
  //     throw new ReturnException('Error logging out', 500);
  //     // test commit
  //   }
  // }
}
