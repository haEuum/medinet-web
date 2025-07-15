import { useMutation } from '@tanstack/react-query';
import { login } from '@/api/login/login.api';
import { Token } from '@/libs/token/session';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/token/token.constants';
import { path } from '@/constants/path/path';
import { Toast } from '@/libs/toast';
import { useNavigate } from 'react-router-dom';
import { Login } from '@/types/login/login.type';

export const useLoginQuery = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (loginData: Login) => login(loginData),
        onSuccess: (data) => {
            Token.setToken(ACCESS_TOKEN, data.data.accessToken);
            Token.setToken(REFRESH_TOKEN, data.data.refreshToken);
            Toast("success", "로그인 성공");
            navigate(path.HOME);
        },
        onError: () => {
            Toast("error", "정보를 다시 확인해주세요!");
        }
    });
};