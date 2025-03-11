import axios, { AxiosError } from 'axios';
import Token from '@/libs/token/token';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/token/token';
import { errorHandler } from './errorHandler';

let isRefreshing = false;
let subscribers: ((token: string) => void)[] = [];

const onRefreshed = (token: string) => {
    subscribers.forEach((callback) => callback(token));
    subscribers = [];
};

const addSubscriber = (callback: (token: string) => void) => {
    subscribers.push(callback);
};

export const responseErrorInterceptor = (error: AxiosError) => {
    
};