import axios from "axios";
import {Login, AuthResponse, NewAccessToken} from "@/types/login/auth.type";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const login = async (loginData: Login): Promise<AuthResponse> => {
    const {data} = await axios.post<AuthResponse>(`${SERVER_URL}/login`, loginData);
    return data;
};

export const refresh = async (refreshToken: { refreshToken: string | null }): Promise<NewAccessToken> => {
    const {data} = await axios.post<NewAccessToken>(`${SERVER_URL}/reissue`, refreshToken);
    return data;
};