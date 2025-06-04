import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Login } from '@/types/auth/auth.type';
import { login } from '@/api/auth/auth.api';
import { Token } from '@/libs/token/session';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/token/token.constants';
import { path } from '@/constants/path/path';
import { Toast } from '@/libs/toast';

const useLogin = () => {
    const navigate = useNavigate();

    const [ loginData, setLoginData ] = useState<Login>({
        name: "",
        password: "",
    });

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData(( prev ) => ({ ...prev, [name]: value }));
    }, []);

    const handleLogin = useCallback(async () => {
        if (!loginData.name.trim()) {
            return Toast("info", "이름을 입력해주세요!");
        }

        if (!loginData.password.trim()) {
            return Toast("info", "비밀번호를 입력해주세요!");
        }

        try {
            const res = await login(loginData);
            Toast("success", "로그인 성공");

            Token.setToken(ACCESS_TOKEN, res.data.accessToken);
            Token.setToken(REFRESH_TOKEN, res.data.refreshToken);

            navigate(path.HOME);

        } catch (error) {
            Toast("error", "정보를 다시 확인해주세요!");
        }
    }, [ loginData, navigate ]);

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") handleLogin();
    };

    return {
        loginData,
        onChange,
        onKeyDown,
        handleLogin,
    };
};

export default useLogin;