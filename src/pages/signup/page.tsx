import { useState } from 'react';
import Button from '@/components/common/button';
import OauthButton from '@/components/common/oauthButton';
import StepInput1 from '@/components/auth/signup/step/stepInput1';
import StepInput2 from '@/components/auth/signup/step/stepInput2';
import StepInput3 from '@/components/auth/signup/step/stepInput3';
import StepInput4 from '@/components/auth/signup/step/stepInput4';
import ProgressBar from '@/components/common/progressBar';
import useSignup from '@/hooks/auth/useSignup';
import SignupBanner from '@/assets/signupBanner.svg';
import Logo from '@/assets/logo.svg';
import './style.scss';

const Signup = () => {
    const { signupData, onChange, handleSignup, onKeyDown } = useSignup();
    const [ step, setStep ] = useState<number>(1);

    const handleNextStep = () => {
        if (step < 4) {
            setStep(step + 1);
        } else {
            handleSignup();
        }
    };

    return (
        <div className='signup-container'>
            <img src={SignupBanner} alt='Signup Banner' />
            <div className='signup-box'>
                <div className='signup-logo'>
                    <img src={Logo} alt='logo' />
                </div>
                <div className='signup-progress'>
                    <ProgressBar />
                </div>
                <div className='signup-form'>
                    {step === 1 && <StepInput1 />}
                    {step === 2 && <StepInput2 signupData={signupData} onChange={onChange} onKeyDown={onKeyDown} />}
                    {step === 3 && <StepInput3 signupData={signupData} onChange={onChange} onKeyDown={onKeyDown} />}
                    {step === 4 && <StepInput4 signupData={signupData} onChange={onChange} onKeyDown={onKeyDown} />}
                </div>
                <div className='signup-button'>
                    <Button text={step === 4 ? '회원가입하기' : '다음'} onClick={handleNextStep} />
                </div>
                <OauthButton />
            </div>
        </div>
    );
};

export default Signup;