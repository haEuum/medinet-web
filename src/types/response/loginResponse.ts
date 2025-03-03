import { newAccessTokenResponse } from "./tokenResponse";

export interface LoginResponse extends newAccessTokenResponse {
  refreshToken: string;
}
