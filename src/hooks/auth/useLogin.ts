import React, {useCallback, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Login} from '@/types/auth/auth.type';
import {login} from '@/api/auth.api';
import {Token} from '@/libs/token/session';
import {ACCESS_TOKEN, REFRESH_TOKEN} from '@/constants/token/token.constants';
import {path} from '@/constants/path/path';
import {Toast} from '@/libs/toast';

const useLogin = () => {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState<Login>({
        email: "",
        password: "",
    });

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setLoginData((prev) => ({...prev, [name]: value}));
    }, []);

    const handleLogin = useCallback(async () => {
        if (!loginData.email.trim()) return Toast("info", "아이디를 입력햐주세요.");
        if (!loginData.password.trim()) return Toast("info", "비밀번호를 입력햐주세요.");

        try {
            const res = await login(loginData);
            Toast("success", "로그인 성공");

            Token.setToken(ACCESS_TOKEN, res.data.accessToken);
            Token.setToken(REFRESH_TOKEN, res.data.refreshToken);

            navigate(path.HOME);

        } catch (err) {
            Toast("error", "정보를 다시 확인해주세요.");
        }
    }, [loginData, navigate]);

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