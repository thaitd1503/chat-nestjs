import { MailerService } from '@nestjs-modules/mailer';
export declare class MailService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    sendWelcomeTemplate(to: string, name: string, otp: string): Promise<void>;
}
