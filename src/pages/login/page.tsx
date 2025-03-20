import { useNavigate } from 'react-router-dom';
import { path } from '@/constants/path/path';
import useLogin from '@/hooks/auth/useLogin';
import Logo from '@/assets/logo.svg';
import LoginBanner from '@/assets/loginBanner.svg';
import Button from '@/components/common/button/index';
import OauthButton from '@/components/common/oauthButton/index';
import './style.scss';

const LoginForm = () => {
    const navigate = useNavigate();
    const { loginData, onChange, onKeyDown, handleLogin } = useLogin();

    const handleSignupRedirect = () => {
        navigate(path.SIGNUP.path);
    };

    return (
        <div className='login-form-container'>
            <div className='login-form-box'>
                <div className='login-form-image'>
                    <img src={ LoginBanner } alt='Login Banner' />
                </div>
                <div className='login-form-content'>
                    <div className='login-form-logo'>
                        <img src={ Logo } alt='logo' />
                    </div>
                    <form className='login-form' onSubmit={(e) => e.preventDefault()}>
                        <div className='login-form-group'>
                            <label htmlFor='email'>이메일</label>
                            <input 
                                name='email' 
                                placeholder='이메일을 입력해주세요' 
                                value={ loginData.email } 
                                onChange={ onChange } 
                                onKeyDown={ onKeyDown } 
                            />
                        </div>
                        <div className='login-form-group'>
                            <label htmlFor='password'>비밀번호</label>
                            <input 
                                type='password' 
                                id='password' 
                                name='password' 
                                placeholder='비밀번호를 입력해주세요' 
                                value={ loginData.password } 
                                onChange={ onChange } 
                                onKeyDown={ onKeyDown } 
                            />
                        </div>
                        <div className='login-form-button'>
                            <Button text='로그인하기' onClick={ handleLogin } />
                        </div>
                        <OauthButton />
                        <div className='signup-link'>
                            계정이 없으신가요? 
                            <span onClick={ handleSignupRedirect }> 계정 생성하기</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;