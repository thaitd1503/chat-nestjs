import { User } from '@/modal/user/user.entity';
import { Conversations } from '@/modal';
import { MessageStatus } from '@/modal/message-status/messageStatus.entity';
export declare class Messages {
    message_id: number;
    conversation_id: number;
    sender_id: number;
    message_text: string;
    message_type: string;
    created_at: string;
    updated_at: string;
    conversations: Conversations;
    users: User;
    messageStatus: MessageStatus[];
}
