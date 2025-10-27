export declare function createApiResponse<T>(data: T, statusCode?: number): {
    data: T;
    statusCode: number;
};
export declare class ApiResponse<T> {
    data: T;
    statusCode: number;
}
