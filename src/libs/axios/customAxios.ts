import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import {
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
    REQUEST_TOKEN_KEY,
} from '../../constants/token/token';
import { BaseResponse } from '../../types/response/baseResponse';
import { newAccessTokenResponse } from '../../types/response/newAccessTokenResponse';
import { refresh } from '../../api/auth';

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
    retry?: number;
}

const medinetAxios = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

const onRefreshed = (token: string) => {
    refreshSubscribers.map((callback) => callback(token));
    refreshSubscribers = [];
}

const addRefreshSubscriber = (callback: (token: string) => void) => {
    refreshSubscribers.push(callback);
}

medinetAxios.interceptors.request.use(
    async (config) => {
      const token = localStorage.getItem(ACCESS_TOKEN_KEY);
      if (token) {
        config.headers[REQUEST_TOKEN_KEY] = `Bearer ${token}`;
      }
  
      if (config.data instanceof FormData) {
        config.headers["Content-Type"] = "multipart/form-data";
      } else {
        config.headers["Content-Type"] = "application/json";
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);