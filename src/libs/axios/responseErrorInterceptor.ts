import axios, { AxiosError } from 'axios';
import Token from '@/libs/token/token';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/token/token';
import { AuthResponseType } from '@/types/auth/auth.type';
import medinetAxios from './customAxios';

let isRefreshing = false;
let subscribers: ((token: string) => void)[] = [];

const onRefreshed = (token: string) => {
    subscribers.forEach((callback) => callback(token));
    subscribers = [];
};

const addSubscriber = (callback: (token: string) => void) => {
    subscribers.push(callback);
};

const saveToken = (accessToken: string, refreshToken: string) => {
    Token.setToken(ACCESS_TOKEN, accessToken);
    Token.setToken(REFRESH_TOKEN, refreshToken);
};

export const responseErrorInterceptor = async (error: AxiosError) => {

};