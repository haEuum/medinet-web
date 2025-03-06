import axios, { AxiosRequestConfig } from 'axios';
import { requestInterceptor } from './requestInterceptor';
import  { responseErrorInterceptor } from './responseErrorInterceptor';
import { ErrorHandler } from './errorHandler';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/token/token';
import Token from '@/libs/token/token';
import { SERVER_URL } from '@env';