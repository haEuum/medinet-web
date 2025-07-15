import axios from 'axios';
import { VerificationRequest, VerificationResponse } from '@/types/verification/verification.type';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const verification = async ( verificationData: VerificationRequest ): Promise<VerificationResponse> => {
    try {
        const { data } = await axios.post<VerificationResponse>(`${SERVER_URL}/sms/send`, verificationData);
        return data;
    } catch (error) {
        throw new Error("전화번호 인증 요청 실패");
    };
};