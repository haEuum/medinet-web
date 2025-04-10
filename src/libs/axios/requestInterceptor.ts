import { InternalAxiosRequestConfig } from "axios";
import { Token } from "@/libs/token/session";
import {
    ACCESS_TOKEN,
    REFRESH_TOKEN,
    REQUEST_TOKEN
} from "@/constants/token/token.constants";

export const requestInterceptor = (
    config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig> => {
    if (Token.getToken(REFRESH_TOKEN) === null)
        window.location.href = "login";
    else
        config.headers[REQUEST_TOKEN] = `Bearer ${ACCESS_TOKEN}`;

    return config;
};