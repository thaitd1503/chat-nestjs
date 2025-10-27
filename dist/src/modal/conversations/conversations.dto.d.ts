export declare class CreateConversationDto {
    is_group: boolean;
    group_id: number;
    memberId: number[];
}
export declare class GetListConversationDto {
    conversation_id: number;
    created_at: string;
    group_id: number;
    is_group: boolean;
    updated_at: string;
    messages: any[];
    userInfo?: any;
}
