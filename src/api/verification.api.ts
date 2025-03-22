import { MedinetAxios } from "@/libs/axios/customAxios";

const SERVER_URL = process.env.VITE_SERVER_URL;

export const verificationEmailCode = async ( email: string ):Promise<void> => {
    try {
        const { data } = await MedinetAxios.post<void>(`${SERVER_URL}/verification/email`, { email });
        return data;
    } catch (error) {
        throw new Error("이메일 코드 전송 실패");
    };
};

export const verificationPhoneCode = async ( phone: string ):Promise<void> => {
    try {
        const { data } = await MedinetAxios.post<void>(`${SERVER_URL}/sms/send`, { phone });
    } catch (error) {
        throw new Error("휴대폰 코드 전송 실패");
    };
};