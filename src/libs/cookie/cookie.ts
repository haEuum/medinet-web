import Cookies from "js-cookie";

const Cookie = {
    getCookie: (key: string): string | undefined => {
      return Cookies.get(key);
    },

    setCookie: (key: string, value: string): void => {
      Cookies.set(key, value);
    },
    
    removeCookie: (key: string): void => {
      Cookies.remove(key);
    },
};

export default Cookie;