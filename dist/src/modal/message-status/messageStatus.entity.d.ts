import { User, Messages } from '@/modal';
export declare class MessageStatus {
    message_status_id: number;
    message_id: number;
    user_id: number;
    status: number;
    updated_at: number;
    user: User;
    messages: Messages;
}
