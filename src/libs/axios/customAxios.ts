import axios, { AxiosError, InternalAxiosRequestConfig, AxiosResponse } from "axios";
import { requestInterceptor } from "./requestInterceptor";
import { responseErrorInterceptor } from "./responseErrorInterceptor";


const medinetAxios = axios.create({
    baseURL: process.env.SERVER_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
    withCredentials: true,
});

medinetAxios.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => requestInterceptor(config),
    (error: AxiosError) => Promise.reject(error),
);

medinetAxios.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => responseErrorInterceptor(error),
);

export default medinetAxios;