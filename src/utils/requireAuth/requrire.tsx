import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {ACCESS_TOKEN} from "@/constants/token/token.constants";
import {path} from "@/constants/path/path";

interface Props {
    children: React.ReactNode;
}

const RequireAuth = ({children}: Props) => {
    const navigate = useNavigate();
    const token = sessionStorage.getItem(ACCESS_TOKEN);

    useEffect(() => {
        if (!token) navigate(path.LOGIN, {replace: true});
    }, [token, navigate]);

    if (!token) alert("토큰이 만료되었습니다. 로그인 페이지로 이동합니다.");

    return <>{children}</>
};

export default RequireAuth;