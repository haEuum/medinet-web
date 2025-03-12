import {InternalAxiosRequestConfig} from "axios";
import {Token} from "@/libs/token/session";
import {ACCESS_TOKEN, REFRESH_TOKEN, REQUEST_TOKEN} from "@/constants/token/token.constants";

export const requestInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig> => {
    if (Token.getToken(REFRESH_TOKEN) === null) window.location.href = "login"; // 로그인 라우터는 나중에 수정하기
    else config.headers[REQUEST_TOKEN] = `Bearer ${ACCESS_TOKEN}`;

    return config;
};
