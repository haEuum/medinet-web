import { getCookie, setCookie, removeCookie } from "../cookie/cookie";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants/token/token";

export const getToken = (key: string): string | undefined => {
    return getCookie(key);
};

export const setToken = (key: string, value: string): void => {
    setCookie(key, value);
};

export const clearToken = () => {
    removeCookie(ACCESS_TOKEN);
    removeCookie(REFRESH_TOKEN);
};