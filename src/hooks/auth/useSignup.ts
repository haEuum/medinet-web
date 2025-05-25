import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignUp } from '@/types/auth/auth.type';
import { signup } from '@/api/auth/auth.api';
import { Verification } from '@/types/verification/verification.type';
import { verification } from '@/api/verification/verification.api';
import { Toast } from '@/libs/toast';
import { path } from '@/constants/path/path';
import { isValidEmail, isValidPassword, isValidPhoneNumber } from '@/utils/validate/inputValidator';

const useSignup = () => {
    const navigate = useNavigate();

    const [ signupData, setSignupData ] = useState<SignUp>({
        email: "",
        phone: "",
        password: "",
        field: "",
        name: "",
        userClass: "",
        phoneVerificationCode: "",
    });

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") handleSignup();
    };

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignupData(( prev ) => ({
            ...prev,
            [name]: value,
        }));
    }, []);

    const handlePhoneVerification = useCallback( async () => {
        try {
            await verification({ phoneNumber: signupData.phone } as Verification);
            Toast("success", "인증번호가 발송되었습니다!");
        } catch (error) {
            Toast("error", "인증번호 발송을 실패했습니다!");
        };
    }, [ signupData.phone ]);

    const handleSignup = useCallback(async () => {
        if (!signupData.email.trim()) return Toast("info", "이메일을 입력해주세요!");
        if (!isValidEmail(signupData.email)) return Toast("info", "유효한 이메일을 입력해주세요!");

        if (!signupData.password.trim()) return Toast("info", "비밀번호를 입력해주세요!");
        if (!isValidPassword(signupData.password)) return Toast("info", "비밀번호는 8자 이상, 숫자와 문자를 포함해야 합니다!");

        if (!signupData.phone.trim()) return Toast("info", "전화번호를 입력해주세요!");
        if (!isValidPhoneNumber(signupData.phone)) return Toast("info", "유효한 전화번호를 입력해주세요!");

        if (!signupData.phoneVerificationCode.trim()) return Toast("info", "인증번호를 입력해주세요!");

        if (!signupData.field) return Toast("info", "직군을 선택해주세요!");
        if (!signupData.userClass) return Toast("info", "소속을 선택해주세요!");

        try {
            await signup(signupData);
            Toast("success", "회원가입 성공");
            navigate(path.LOGIN);
        } catch (error) {
            Toast("error", "정보를 다시 확인해주세요!");
        }
    }, [ signupData, navigate ]);

    return {
        signupData,
        onChange,
        onKeyDown,
        handleSignup,
        handlePhoneVerification,
    };
};

export default useSignup;