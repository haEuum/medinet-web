import { useNavigate } from 'react-router-dom';
import { Token } from '@/libs/token/session';
import { path } from '@/constants/path/path';
import { Toast } from '@/libs/toast';

const useLogout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        Token.clearToken();
        navigate(path.LOGIN);
        Toast("success", "로그아웃 되었습니다!");
    };

    return {
        handleLogout,
    };
};

export default useLogout;