import Cookies from "js-cookie";

export const setCookie = (key: string, value: string) => {
  return Cookies.set(key, value);
};

export const getCookie = (key: string) => {
  return Cookies.get(key);
};

export const removeCookie = (key: string) => {
  return Cookies.remove(key);
};