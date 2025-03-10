import Cookie from "@/libs/cookie/cookie";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants/token/token";

export const Token = {
    getToken: (key: string): string | undefined => {
        return Cookie.getCookie(key);
    },

    setToken: (key: string, value: string): void => {
        Cookie.setCookie(key, value);
    },

    removeToken: (key: string): void => {
        Cookie.removeCookie(key);
    },
};

export default Token;