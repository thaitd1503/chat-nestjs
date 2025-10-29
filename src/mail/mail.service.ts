import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendWelcomeTemplate(to: string, name: string, confirmUrl: string) {
    await this.mailerService.sendMail({
      to,
      subject: 'Chào mừng bạn đến với hệ thống của Duy Thái 🎉',
      template: './welcome', // tương ứng với file welcome.hbs
      context: {
        name,
        confirmUrl,
      },
    });
  }
}
