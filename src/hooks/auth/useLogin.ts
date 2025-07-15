import React, { useCallback, useState } from 'react';
import { useLoginQuery } from '@/queries/login/login.query';
import { Login } from '@/types/login/login.type';
import { Toast } from '@/libs/toast';

const useLogin = () => {
    const [loginData, setLoginData] = useState<Login>({
        phoneNumber: '',
        password: '',
    });

    const { mutate: loginMutate } = useLoginQuery()
    ;

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({ ...prev, [name]: value }));
    }, []);

    const handleLogin = useCallback(() => {
        if (!loginData.phoneNumber.trim()) {
            return Toast('info', '전화번호를 입력해주세요!');
        }
        if (!loginData.password.trim()) {
            return Toast('info', '비밀번호를 입력해주세요!');
        }

        loginMutate(loginData);
    }, [loginData, loginMutate]);

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleLogin();
    };

    return {
        loginData,
        onChange,
        onKeyDown,
        handleLogin,
    };
};

export default useLogin;