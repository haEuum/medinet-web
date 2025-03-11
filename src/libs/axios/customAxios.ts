import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants/token/token";
import { errorHandler } from "./errorHandler";
import { requestInterceptor } from "./requestInterceptor";
import { responseErrorInterceptor } from "./responseErrorInterceptor";

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

medinetAxios.interceptors.request.use(
    (config: CustomAxiosRequestConfig) => {
        return requestInterceptor(config);
    },
    (error: AxiosError) => {
        return errorHandler(error);
    },
);

medinetAxios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error: AxiosError) => {
        return responseErrorInterceptor(error);
    },
);