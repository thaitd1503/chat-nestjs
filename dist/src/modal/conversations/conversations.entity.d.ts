import { Groups, Messages } from '@/modal';
import { ConversationUsers } from '@/modal/conversation-users/conversationUsers.entity';
export declare class Conversations {
    conversation_id: number;
    is_group: boolean;
    group_id: number;
    created_at: string;
    updated_at: string;
    groups: Groups;
    conversationUsers: ConversationUsers[];
    messages: Messages[];
}
