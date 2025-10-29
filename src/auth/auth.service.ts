import { Injectable } from '@nestjs/common';
import { UsersService } from '@/modal/user/users.service';
import { JwtService } from '@nestjs/jwt';
import { ReturnException } from '@/common/custom.exception';
import { LoginDto } from '@/auth/roles-auth/auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async LogIn(login: LoginDto): Promise<{ access_token: string; user_id: number }> {
    const user = await this.usersService.findOne(login.email);

    if (!user) {
      throw new ReturnException('Tài khoản chưa tồn tại', 403);
    }

    const isMatch = await bcrypt.compare(login.password, user.password_hash);

    if (!isMatch) {
      throw new ReturnException('Tài khoản hoặc mật khẩu sai', 403);
    }

    if (user.status == 'pending') {
      throw new ReturnException('Vui lòng xác thực tài khoản qua email đã đăng ký!', 403);
    }

    const payload = {
      user_id: user.user_id,
      email: user.email,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
      user_id: user.user_id,
    };
  }
}
