import { useNavigate } from 'react-router-dom';
import { path } from '@/constants/path/path';
import useLogin from '@/hooks/auth/useLogin';
import Button from '@/components/common/button/index';
import LoginBanner from '@/assets/loginBanner.svg';
import Logo from '@/assets/logo.svg';
import TextField from '@/components/common/textField';
import './style.scss';
import {useRef} from "react";

const Login = () => {
    const navigate = useNavigate();
    const { loginData, onChange, handleLogin } = useLogin();
    const divRef = useRef<HTMLFormElement>(null);

    const handleSignupRedirect = () => {
        navigate(path.SIGNUP);
    };

    return (
        <div className='login-page'>
            <div className='login-container'>
                <div className='login-banner'>
                    <img src={ LoginBanner } alt='LoginBanner' />
                </div>
                <div className='login-form'>
                    <div className='logo-container'>
                        <img src={ Logo } alt='logo' />
                    </div>
                    <form className='login-form-body' ref={divRef}>
                        <div className='login-input-group'>
                            <TextField 
                                label='이메일'
                                name='email'
                                placeholder='이메일을 입력해주세요'
                                value={loginData.email}
                                onChange={onChange}
                            />
                            <TextField 
                                label='비밀번호'
                                type='password'
                                name='password'
                                placeholder='비밀번호를 입력해주세요'
                                value={loginData.password}
                                onChange={onChange}
                            />
                        </div>
                        <div className='login-submit-button'>
                            <Button text='로그인하기' onClick={ handleLogin } />
                        </div>
                        <div className='signup-redirect'>
                            계정이 없으신가요? 
                            <span onClick={ handleSignupRedirect }> 계정 생성하기</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;