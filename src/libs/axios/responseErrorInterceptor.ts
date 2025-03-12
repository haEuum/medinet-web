import { AxiosError } from "axios";
import {Token} from "@/libs/token/session";
import { ACCESS_TOKEN,REFRESH_TOKEN,REQUEST_TOKEN } from "src/constants/token/token.constants";
import {MedinetAxios} from "@/libs/axios/customAxios";
import {refresh} from "@/api/auth.api";

//리프레쉬 작업중인지 아닌지를 구분하는 변수
let isRefreshing = false;

let refreshSubscribers: ((accessToken: string) => void)[] = [];

const onTokenRefreshed = (accessToken: string) => {
    refreshSubscribers.map((callback) => callback(accessToken));
};

const addRefreshSubscriber = (callback: (accessToken: string) => void) => {
    refreshSubscribers.push(callback);
};


export const responseErrorInterceptor = async(error: AxiosError ) => {

    if (error.response) {
        const {
            config: originalRequest,
            response: { status },
        } = error;

        const usingAccessToken = Token.getToken(ACCESS_TOKEN);
        const usingRefreshToken = Token.getToken(REFRESH_TOKEN);

        if(
            usingAccessToken !== undefined &&
            usingRefreshToken !== undefined &&
            status === 401
        ){
            if (!isRefreshing) {
                //리프레쉬 작업을 시작함
                isRefreshing = true;

                if (usingRefreshToken === null){
                    return
                }
                //리프레쉬 api 요청
                try {
                    const { data: newAccessToken  } = await refresh({ refreshToken: usingRefreshToken });

                    MedinetAxios.defaults.headers.common[
                        REQUEST_TOKEN
                        ] = `Bearer ${newAccessToken}`;

                    Token.setToken(ACCESS_TOKEN, newAccessToken.accessToken);

                    //리프레쉬 작업을 마침
                    isRefreshing = false;

                    //새로 받은 accessToken을 기반으로 이때까지 밀려있던 요청을 모두 처리
                    onTokenRefreshed(newAccessToken.accessToken);
                } catch (error) {
                    //리프레쉬 하다가 오류난거면 리프레쉬도 만료된 것이므로 다시 로그인
                    window.alert("세션이 만료되었습니다.");
                    Token.clearToken();
                    window.location.href = "/sign";
                }
            }
            return new Promise((resolve) => {
                addRefreshSubscriber((accessToken: string) => {
                    originalRequest!.headers![REQUEST_TOKEN] = `Bearer ${accessToken}`;
                    resolve(MedinetAxios(originalRequest!));
                });
            });
        }
    }
    return Promise.reject(error);
};