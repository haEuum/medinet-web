import { newAccessTokenResponse } from "./newAccessTokenResponse";

export interface LoginResponse extends newAccessTokenResponse {
    refreshToken: string;
}