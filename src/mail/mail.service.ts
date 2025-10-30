import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendWelcomeTemplate(to: string, name: string, otp: string) {
    const confirmUrl = `https://tranduythai.id.vn/verify?email=${to}&otp=${otp}`;
    await this.mailerService.sendMail({
      to,
      subject: 'Chào mừng bạn đến với hệ thống của Chat Nhanh 🎉',
      template: './welcome', // tương ứng với file welcome.hbs
      context: {
        name,
        confirmUrl,
      },
    });
  }
}
