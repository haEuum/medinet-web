import React from 'react';
import logo from '@/assets/logo.svg';
import loginBanner from '@/assets/loginBanner.svg';
import useLogin from '@/hooks/auth/useLogin';
import googleIcon from '@/assets/googleIcon.svg';
import kakaoIcon from '@/assets/kakaoIcon.svg';
import './style.scss';

const LoginForm = () => {
    const { loginData, onChange, onKeyDown, handleLogin } = useLogin();

    return (
        <div className='login-form-container'>
            <div className='login-form-banner'>
                <img src={loginBanner} alt='banner' />
            </div>
            <div className='login-form-box'>
                <div className='login-form-logo'>
                    <img src={logo} alt='logo' />
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
                    <button onClick={ handleLogin } className='login-button'>
                        로그인하기
                    </button>
                    <div className='oauth-button'>
                        <button>
                            <img src={googleIcon} alt='google' />
                        </button>
                        <button>
                            <img src={kakaoIcon} alt='kakao' />
                        </button>
                    </div>
                    <div className='signup-link'>
                        계정이 없으신가요? <span >계정 생성하기</span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;