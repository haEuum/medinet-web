import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignUp } from '@/types/auth/auth.type';
import { signup } from '@/api/auth.api';
import { Token } from '@/libs/token/session';
import { Toast } from '@/libs/toast';
import { path } from '@/constants/path/path';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/token/token.constants';

const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const isValidPassword = (password: string) => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
};

const useSignup = () => {
    const navigate = useNavigate();

    const [ signupData, setSignupData ] = useState<SignUp>({
        email: "",
        phone: "",
        password: "",
        name: "",
        userClass: "",
        field: "",
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
        const { email, phone, password, name, userClass, field } = signupData;

        if (!email || !phone || !password || !name || !userClass || !field) {
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
            const response = await signup({ email, phone, password, name, userClass, field });

            const { accessToken, refreshToken } = response.data;

            Token.setToken(ACCESS_TOKEN, accessToken);
            Token.setToken(REFRESH_TOKEN, refreshToken);

            navigate(path.LOGIN);
        } catch (err) {
            Toast("error", "회원가입 실패");
        };
    };
};
export default useSignup;