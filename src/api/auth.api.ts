import axios from "axios";
import { LoginResponse } from "../types/response/loginResponse";
import { tokenResponse } from "../types/response/tokenResponse";
import { LoginForm } from "../types/auth/loginForm";

const SERVER_URL = process.env.REACT_APP_SERVER_URL || "";

export const login = async (loginData: LoginForm): Promise<LoginResponse> => {
  try {
    const { data } = await axios.post(`${SERVER_URL}/login`, loginData);
    return data;
  } catch (error) {
    throw new Error(`로그인 요청 실패`);
  }
};

export const refresh = async (refreshToken: string): Promise<tokenResponse> => {
  try {
    const { data } = await axios.post(`${SERVER_URL}/reissue`, refreshToken);
    return data;
  } catch (error) {
    throw new Error("엑세 토큰 재발급 실패");
  }
};