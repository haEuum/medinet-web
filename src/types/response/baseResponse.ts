export interface BaseResponse<T> {
    status: number;
    massage: string;
    data: T;
}