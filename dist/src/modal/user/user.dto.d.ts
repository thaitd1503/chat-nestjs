export declare class CreatUserDto {
    username?: string;
    email?: string;
    password?: string;
    avatar_url?: string;
}
export declare class GetUserDto {
    user_id: number;
    username: string;
    email: string;
    avatar_url: string;
    created_at: string;
    updated_at: string;
    role_name: string;
}
