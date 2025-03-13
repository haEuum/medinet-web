import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthResponse, Login } from '../../types/auth/auth.type';

const useLogin = () => {
    const navigate = useNavigate();

    const [login, setLogin] = useState<Login>({
        email: "",
        phone: "",
        password: "",
    });

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await axios.post<AuthResponse>(`${ process.env.VITE_SERVER_URL }/login`, login);

            const accessToken = response.data.data.accessToken;
            const refreshToken = response.data.data.refreshToken;

            sessionStorage.setItem('accessToken', accessToken);
            sessionStorage.setItem('refreshToken', refreshToken);

            navigate('/');

        } catch (err) {
            setError('로그인 실패');
        } finally {
            setLoading(false);
        }
    };

    return {
        login,
        loading,
        error,
        onChange,
        handleLogin,
    };
};

export default useLogin;