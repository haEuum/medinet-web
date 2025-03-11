import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants/token/token";

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
    retry?: boolean;
};

const medinetAxios = axios.create({
    baseURL: process.env.SERVER_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
    withCredentials: true,
});

let isRefreshing = false;
let subscribers: ((token: string) => void)[] = [];

const onRefreshed = (token: string) => {
    subscribers.forEach((callback) => callback(token));
    subscribers = [];
};

medinetAxios.interceptors.request.use(

);

medinetAxios.interceptors.response.use(

);