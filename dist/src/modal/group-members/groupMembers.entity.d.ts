import { User, Groups } from '@/modal';
export declare class GroupMembers {
    group_member_id: number;
    group_id: number;
    user_id: number;
    role: string;
    joined_at: string;
    groups: Groups;
    user: User;
}
