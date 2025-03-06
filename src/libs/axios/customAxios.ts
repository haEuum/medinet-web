import axios, { AxiosRequestConfig } from 'axios';
import { requestInterceptor } from './requestInterceptor';
import  { responseErrorInterceptor } from './responseErrorInterceptor';
import { ErrorHandler } from './errorHandler';
import { ACCESS_TOKEN, REQUEST_TOKEN } from '@/constants/token/token';
import Token from '@/libs/token/token';

const createCustomAxiosInstance = (baseURL?: AxiosRequestConfig) => {
    return axios.create({
        withCredentials: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    });
};

export const medinetAxios = createCustomAxiosInstance({
    baseURL: process.env.SERVER_URL,
    headers: {
        [REQUEST_TOKEN]: `Bearer ${Token.getToken(ACCESS_TOKEN)}`,
    },
});

medinetAxios.interceptors.request.use(requestInterceptor);
medinetAxios.interceptors.response.use(
    (response) => response,
    responseErrorInterceptor
);

medinetAxios.interceptors.response.use(
    (response) => response,
    ErrorHandler
);

export default medinetAxios;