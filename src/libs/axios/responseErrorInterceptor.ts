import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import Token from '@/libs/token/token';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/token/token';

export const responseErrorInterceptor = (error: AxiosError) => {

};