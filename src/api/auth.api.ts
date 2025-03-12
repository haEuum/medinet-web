import { MedinetAxios } from "@/libs/axios/customAxios";
import { Login, AuthResponse, NewAccessToken } from "@/types/auth/auth.type";

const SERVER_URL = process.env.VITE_SERVER_URL;

export const login = async (login: Login):Promise<AuthResponse> => {
    try {
        const {data} = await MedinetAxios.post<AuthResponse>(`${SERVER_URL}/login`, login);
        return data;
    } catch (error) {
        throw new Error("로그인 요청에 실패했습니다.")
    }
};

export const refresh = async (refreshToken: {refreshToken: string | null}): Promise<NewAccessToken> => {
    try {
        const {data} = await MedinetAxios.post<NewAccessToken>(`${SERVER_URL}/reissue`, refreshToken);
        return data;
    } catch (error) {
        throw new Error("리프레쉬 에러");
    }
};