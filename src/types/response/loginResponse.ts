import { tokenResponse } from "./tokenResponse";

export interface LoginResponse extends tokenResponse {
  refreshToken: string;
}
