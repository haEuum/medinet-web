import axios from 'axios';
import { LoginResponse } from '../types/response/loginResponse';
import { newAccessTokenResponse } from '../types/response/newAccessTokenResponse';
import { LoginForm } from '../types/auth/loginForm';

const SERVER_URL = process.env.REACT_APP_SERVER_URL || "";

export const login = async (loginData: LoginForm): Promise<LoginResponse> => {
    try {
        const { data } = await axios.post(`${SERVER_URL}/login`, loginData);
        return data;
    } catch (error) {
        throw new Error("로그인 요청에 실패하였습니다.");
    }
};