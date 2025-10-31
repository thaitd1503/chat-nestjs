import { Injectable } from '@nestjs/common';
import { UsersService } from '@/modal/user/users.service';
import { JwtService } from '@nestjs/jwt';
import { ReturnException } from '@/common/custom.exception';
import { LoginDto, VerifyOtpDto } from '@/auth/roles-auth/auth.dto';
import * as bcrypt from 'bcrypt';
import { MailService } from '@/mail/mail.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private mailService: MailService,
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

    if (user.status === 'pending') {
      const otpDate = new Date(user.time_otp);
      if (isNaN(otpDate.getTime()) || Date.now() - otpDate.getTime() > 2 * 60 * 1000) {
        // update new otp and send mail
        const newOtp = Math.floor(1000000000 + Math.random() * 9000000000).toString();
        user.otp_secret = newOtp;
        user.time_otp = new Date().toISOString();
        await this.usersService.updateUser(user.user_id, user);
        // send mail
        await this.mailService.sendWelcomeTemplate(user.email, user.username, newOtp);
      }
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

  async VerifyOtp(payload:VerifyOtpDto): Promise<any> {
    const user = await this.usersService.findOne(payload.email);
    if (!user) {
      throw new ReturnException('Tài khoản chưa tồn tại', 403);
    }
    if (user.otp_secret !== payload.otp) {
      throw new ReturnException('Mã OTP không tồn tại', 403);
    }

    if (user.otp_secret == payload.otp) {
      user.status = 'active';
      user.otp_secret = null;
      user.time_otp = null;
      await this.usersService.updateUser(user.user_id, user);
      return { message: 'Xác thực tài khoản thành công' };
    }
  }
}
