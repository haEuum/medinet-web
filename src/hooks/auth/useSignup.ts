import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {SignUp} from "@/types/signup/signup.type";
import {signup} from "@/api/signup/signup.api";
import { VerificationRequest } from '@/types/verification/verification.type';
import { verification } from '@/api/verification/verification.api';
import { Toast } from '@/libs/toast';
import { path } from '@/constants/path/path';
import { validateSignup } from '@/utils/validator/signup-validator';

const useSignup = () => {
    const navigate = useNavigate();

    const [ signupData, setSignupData ] = useState<SignUp>({
        email: "",
        phoneNumber: "",
        password: "",
        field: "",
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
            await verification({ phoneNumber: signupData.phoneNumber } as VerificationRequest );
            Toast("success", "인증번호가 발송되었습니다!");
        } catch (error) {
            Toast("error", "인증번호 발송을 실패했습니다!");
        };
    }, [ signupData.phoneNumber ]);

    const handleSignup = useCallback(async () => {
        const validationError = validateSignup(signupData);
        if (validationError) return Toast("error", validationError);
        
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