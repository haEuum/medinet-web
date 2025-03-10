import { InternalAxiosRequestConfig } from "axios";
import Token from "@/libs/token/token";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants/token/token";

export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
    const accessToken = Token.getToken(ACCESS_TOKEN);
    const refreshToken = Token.getToken(REFRESH_TOKEN);

    if (!accessToken || !refreshToken) {
        console.log("인증 정보 없음");
    } else {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
        config.headers["Refresh-Token"] = `Bearer ${refreshToken}`;
    };
    
    return config;
};