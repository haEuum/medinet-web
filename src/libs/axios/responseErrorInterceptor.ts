import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export const errorHandler = (error: AxiosError) => {
    console.error("응답 에러:", error);

    if (error.response) {
        const { status, data } = error.response;
        const message = (data as any)?.message || "알 수 없는 에러가 발생했습니다.";

        switch (status) {
            case 400:
                toast.error(`요청 오류: ${message}`);
                break;
            case 401:
                toast.error(`인증 오류: ${message}`);
                break;
            case 403:
                toast.error(`권한 오류: ${message}`);
                break;
            case 404:
                toast.error(`요청 오류: ${message}`);
                break;
            case 500:
                toast.error(`서버 오류: ${message}`);
                break;
            default:
                toast.error(`오류: ${message}`);
        }
    } else if (error.request) {
        toast.error("네트워크 오류: 서버와 통신이 원활하지 않습니다.");
    } else {
        toast.error(error.message || "알 수 없는 오류가 발생했습니다.");
    }
    return Promise.reject(error);
};