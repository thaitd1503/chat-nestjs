import { Role } from '@/modal/role/role.entity';
import { GroupMembers, Messages } from '@/modal';
import { ConversationUsers } from '@/modal/conversation-users/conversationUsers.entity';
import { MessageStatus } from '@/modal/message-status/messageStatus.entity';
export declare class User {
    user_id: number;
    role_id: number;
    username: string;
    email: string;
    password_hash: string;
    avatar_url?: string;
    otp_secret?: string;
    created_at?: string;
    updated_at?: string;
    role: Role;
    groupMembers: GroupMembers[];
    conversationUser: ConversationUsers[];
    messageStatus: MessageStatus[];
    messages: Messages[];
}
