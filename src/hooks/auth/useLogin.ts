import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthResponse, Login } from '@/types/auth/auth.type';
import { MedinetAxios } from '@/libs/axios/customAxios';
import { Token } from '@/libs/token/session';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/token/token.constants';
import { Toast } from '@/libs/toast';


const useLogin = () => {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState<Login>({
        email: "",
        phone: "",
        password: "",
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleLogin();
        };
    };

    const handleLogin = async () => {
        const { email, phone, password } = loginData;

        if (!email || !phone || !password) {
            Toast("error", "모든 항목을 입력해주세요.");
            return;
        };
        
        try {

            const response = await MedinetAxios.post<AuthResponse>(
                `${ process.env.VITE_SERVER_URL }/login`, 
                loginData
            );

            const accessToken = response.data.data.accessToken;
            const refreshToken = response.data.data.refreshToken;

            Token.setToken(ACCESS_TOKEN, accessToken);
            Token.setToken(REFRESH_TOKEN, refreshToken);

            navigate('/');

        } catch (err) {
            Toast("error", "로그인 실패");
        };
    };

    return {
        loginData,
        onChange,
        onKeyDown,
        handleLogin,
    };
};

export default useLogin;