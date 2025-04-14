import axios from "axios";

const SERVER_URL = process.env.VITE_SERVER_URL;

export const verificationPhoneCode = async ( phone: string ):Promise<void> => {
    try {
        const { data } = await axios.post<void>(`${SERVER_URL}/sms/send`, { phone });
    } catch (error) {
        throw new Error("휴대폰 코드 전송 실패");
    };
};