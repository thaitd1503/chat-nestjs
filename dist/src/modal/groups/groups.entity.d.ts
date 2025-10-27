import { GroupMembers } from '@/modal';
import { Conversations } from '@/modal/conversations/conversations.entity';
export declare class Groups {
    group_id: number;
    group_name: string;
    description: string;
    is_private: boolean;
    created_at: string;
    updated_at: string;
    members: GroupMembers[];
    conversations: Conversations[];
}
