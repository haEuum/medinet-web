import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/token/token';
import cookie from '@/libs/cookie/cookie';

class Token {
    public getToken(key: string): string | undefined {
        return cookie.getCookie(key);
    };

    public setToken(key: string, token: string): void {
        cookie.setCookie(key, token);
    };

    public clearToken(key: string): void {
        cookie.removeCookie(ACCESS_TOKEN);
        cookie.removeCookie(REFRESH_TOKEN);
    };
}

export default new Token();