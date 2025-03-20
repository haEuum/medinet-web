import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignUp } from '@/types/auth/auth.type';
import { signup } from '@/api/auth.api';
import { Toast } from '@/libs/toast';
import { path } from '@/constants/path/path';
import { sendPhoneVerificationCode } from '@/api/auth.api';
import { sendEmailVerificationCode } from '@/api/auth.api';

const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const isValidPassword = (password: string) => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
};

const useSignup = () => {
    const navigate = useNavigate();

    const [signupData, setSignupData] = useState<SignUp>({
        email: "",
        phone: "",
        password: "",
        name: "",
        userClass: "",
        field: "",
        phoneVerificationCode: "",
        emailVerificationCode: "",
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignupData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSignup();
        };
    };

    const handleSignup = async () => {
        const { email, phone, password, name, userClass, field, phoneVerificationCode, emailVerificationCode } = signupData;

        if (!email || !phone || !password || !name || !userClass || !field || !phoneVerificationCode || !emailVerificationCode) {
            Toast("error", "모든 항목을 입력해주세요.");
            return;
        };

        if (!isValidEmail(email)) {
            Toast("error", "올바른 이메일 형식을 작성해주세요.");
            return;
        };

        if (!isValidPassword(password)) {
            Toast("error", "비밀번호는 8자 이상, 숫자, 문자, 특수문자를 포함해야합니다.");
            return;
        };

        try {
            const response = await signup({
                email,
                phone,
                password,
                name,
                userClass,
                field,
                phoneVerificationCode,
                emailVerificationCode,
            });

            Toast("success", "회원가입 성공");

            navigate(path.LOGIN.path);

        } catch (err) {
            Toast("error", "회원가입 실패");
        };
    };

    const handlePhoneVerificationCode = async () => {
        const { phone } = signupData;

        if (!phone) {
            Toast("error", "전화 번호를 입력해주세요");
            return;
        };

        try {
            const response = await sendPhoneVerificationCode(phone);

            if (response.status === 0) {
                Toast("success", "인증 코드가 전송되었습니다.");
            } else {
                Toast("error", "인증 코드 전송 실패");
            }
        } catch (error) {
            Toast("error", "인증 코드 전송 실패");
        };
    };

    const handleEmailVerificationCode = async () => {
        const { email } = signupData;

        if (!email) {
            Toast("error", "이메일을 입력해주세요");
            return;
        };

        try {
            const response = await sendEmailVerificationCode(email);

            if (response.status === 0) {
                Toast("success", "인증 코드가 전송되었습니다.");
            } else {
                Toast("error", "인증 코드 전송 실패");
            };
        } catch (error) {
            Toast("error", "인증 코드 전송 실패");
        };
    };

    return {
        signupData,
        onChange,
        onKeyDown,
        handleSignup,
        handlePhoneVerificationCode,
        handleEmailVerificationCode,
    };
};

export default useSignup;