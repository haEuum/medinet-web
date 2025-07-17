import {useNavigate} from "react-router-dom";
import {path} from "@/constants/path/path";
import useLogin from "@/hooks/auth/useLogin";
import Button from "@/components/ui/button";
import LoginBanner from "@/assets/auth/loginBanner.svg";
import Logo from "@/assets/logo/logo.svg";
import TextField from "@/components/ui/textfield/index";
import "./style.scss";

const Login = () => {
    const navigate = useNavigate();
    const {loginData, onChange, handleLogin} = useLogin();

    const handleSignupRedirect = () => {
        navigate(path.SIGNUP);
    };

    return (
        <main className="main auth-page">
            <div className="auth-container">
                <div className="auth-banner">
                    <img src={LoginBanner} alt="LoginBanner"/>
                </div>
                <div className="auth-form">
                    <img src={Logo} alt="logo"/>
                    <div className="auth-input-group">
                        <TextField
                            label="전화번호"
                            type="text"
                            name="phoneNumber"
                            placeholder="전화번호를 입력해주세요"
                            value={loginData.phoneNumber}
                            onChange={onChange}
                        />
                        <TextField
                            label="비밀번호"
                            type="password"
                            name="password"
                            placeholder="비밀번호를 입력해주세요"
                            value={loginData.password}
                            onChange={onChange}
                        />
                    </div>
                    <Button text="로그인" size="Large" color="Primary" onClick={handleLogin}/>
                    <div className="redirect">
                        <span>계정이 없으신가요?</span>
                        <span onClick={handleSignupRedirect}> 계정 생성하기</span>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;
