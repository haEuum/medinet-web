import axios from 'axios';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/token/token';
import Token from '@/libs/token/token';
import medinetAxios from '@/libs/axios/customAxios';
import { LoginType } from '@/types/auth/auth.type';
import { RegisterType } from '@/types/auth/auth.type';

const saveToken = (accessToken: string, refreshToken: string) => {
    Token.setToken(ACCESS_TOKEN, accessToken);
    Token.setToken(REFRESH_TOKEN, refreshToken);
};

export const login = async (LoginData: LoginType) => {
    try {
        const response = await medinetAxios.post(`${process.env.SERVER_URL}/login`, LoginData);
        const { accessToken, refreshToken } = response.data;

        if (!accessToken || !refreshToken) {
            throw new Error("토큰 정보가 잘못되었습니다.");
        };

        saveToken(accessToken, refreshToken);
        return response.data;
    } catch (error) {
        console.log("로그인 에러", error);
        throw error;
    };
};

export const Register = async (SignupData: RegisterType) => {
    try {
        const response = await medinetAxios.post(`${process.env.SERVER_URL}/signup`, SignupData);
        return response.data;
    } catch (error) {
        console.log("회원가입 에러", error);
        throw error;
    };
};

export const refreshToken = async () => {
    try {
        const refreshToken = Token.getToken(REFRESH_TOKEN);

        if (!refreshToken) {
            throw new Error("리프레시 토큰이 없습니다.");
        };

        const response = await axios.post(`${process.env.SERVER_URL}/reissue`, { refreshToken });
        const { accessToken, newRefreshToken } = response.data;

        if (!accessToken || !newRefreshToken) {
            throw new Error("새로운 토큰 발급에 실패하였습니다.");
        };

        saveToken(accessToken, newRefreshToken);
        return accessToken;
    } catch (error) {
        console.log("리프레시 토큰 에러", error);
        throw error;
    };
};