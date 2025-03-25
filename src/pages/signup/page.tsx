import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { path } from '@/constants/path/path';
import useSignup from '@/hooks/auth/useSignup';
import Logo from '@/assets/logo.svg';
import SignupBanner from '@/assets/signupBanner.svg';
import Button from '@/components/common/button/index';
import OauthButton from '@/components/common/oauthButton/index';
import Step1 from '@/components/auth/signup/step1';
import Step2 from '@/components/auth/signup/step2';
import Step3 from '@/components/auth/signup/step3';
import Step4 from '@/components/auth/signup/step4';
import './style.scss';

const Signup = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState<number>(1);
    const { handleSignup } = useSignup();

    const handleLoginRedirect = () => {
        navigate(path.LOGIN);
    };

    const handleNextStep = () => {
        if (step < 4) {
            setStep(step + 1);
        } else {
            handleSignup();
        };
    };

    return (
        <div className='signup-page'>
            <div className='signup-container'>
                <div className='signup-banner'>
                    <img src={ SignupBanner } alt='signupBanner' />
                </div>
                <div className='signup-form'>
                    <div className='signup-logo'>
                        <img src={ Logo } alt='logo' />
                    </div>
                    <form className='signup-form-body' onSubmit={(e) => e.preventDefault()}>
                        <div className='signup-step-group'>
                            {step === 1 && <Step1 />}
                            {step === 2 && <Step2 />}
                            {step === 3 && <Step3 />}
                            {step === 4 && <Step4 />}
                        </div>
                        <div className='signup-button-group'>
                            <Button text={ step < 4 ? '다음' : '가입하기' } onClick={ handleNextStep } />
                        </div>
                        <OauthButton />
                        <div className='login-redirect'>
                            이미 계정이 있으신가요? 
                            <span onClick={ handleLoginRedirect }> 로그인 하기</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;