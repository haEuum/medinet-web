import axios, {AxiosRequestConfig} from "axios";
import {requestInterceptor} from "@/libs/axios/requestInterceptor";
import {responseErrorInterceptor} from "@/libs/axios/responseErrorInterceptor";
import {REQUEST_TOKEN, ACCESS_TOKEN} from "@/constants/token/token.constants";
import {Token} from "@/libs/token/session";

// env에서 서버 주소를 VITE_SERVER_URL로 설정해야 합니다.
const SERVER_URL = process.env.VITE_SERVER_URL;

const createCustomAxiosInstance = (baseUrl?: AxiosRequestConfig) => {
    const basecConfig: AxiosRequestConfig = {
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    };
    return axios.create({
        ...basecConfig,
        ...baseUrl,
        withCredentials: true,
    });
} ;

export const MedinetAxios = createCustomAxiosInstance({
    baseURL: SERVER_URL,
    headers: {
        [REQUEST_TOKEN]: `Bearer ${Token.getToken(ACCESS_TOKEN)}`!,
    },
});

MedinetAxios.interceptors.request.use((res) => res, requestInterceptor);
MedinetAxios.interceptors.response.use((res) => res, responseErrorInterceptor);