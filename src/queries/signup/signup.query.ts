import { useMutation } from '@tanstack/react-query';
import { signup } from '@/api/signup/signup.api';
import { Toast } from '@/libs/toast';
import { useNavigate } from 'react-router-dom';
import { path } from '@/constants/path/path';
import {SignUp} from "@/types/signup/signup.type";

export const useSignupQuery = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (payload: SignUp) => signup(payload),
        onSuccess: () => {
            Toast('success', '회원가입 성공');
            navigate(path.LOGIN);
        },
        onError: () => {
            Toast('error', '정보를 다시 확인해주세요!');
        },
    });
};