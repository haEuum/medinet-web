import axios from "axios";
import { Login, SignUp, AuthResponse, NewAccessToken } from "@/types/auth/auth.type";

const SERVER_URL = process.env.VITE_SERVER_URL;

export const login = async ( loginData: Login ):Promise<AuthResponse> => {
    try {
        const { data } = await axios.post<AuthResponse>(`${SERVER_URL}/login`, loginData);
        return data;
    } catch (error) {
        throw new Error("로그인 요청 실패");
    };
};

export const refresh = async ( refreshToken: { refreshToken: string | null } ): Promise<NewAccessToken> => {
    try {
        const { data } = await axios.post<NewAccessToken>(`${SERVER_URL}/reissue`, refreshToken);
        return data;
    } catch (error) {
        throw new Error("리프레시 에러");
    };
};

export const signup = async ( signUpData: SignUp ): Promise<AuthResponse> => {
    try {
        const { data } = await axios.post<AuthResponse>(`${SERVER_URL}/signup`, signUpData);
        return data;
    } catch (error) {
        throw new Error("회원가입 요청 실패");
    };
};