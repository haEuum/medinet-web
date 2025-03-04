import axios, { AxiosError, AxiosRequestConfig } from "axios";
import {
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
    REQUEST_TOKEN_KEY,
} from "../../constants/token/token";
import { BaseResponse } from "../../types/response/baseResponse";
import { TokenResponse } from "../../types/response/tokenResponse";

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
    retry?: boolean;
};

const medinetAxios = axios.create({
    baseURL: process.env.VITE_SERVER_URL,
    headers: {
        Accept: "application/json",
    },
    withCredentials: true,
});

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

const onRefreshed = (token: string) => {
    refreshSubscribers.forEach((callback) => callback(token));
    refreshSubscribers = [];
};

const addRefreshSubscriber = (callback: (token: string) => void) => {
    refreshSubscribers.push(callback);
};

