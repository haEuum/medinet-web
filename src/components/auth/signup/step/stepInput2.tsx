import React from 'react';
import StepInput from './stepInput';

interface StepProps {
    signupData: { email: string; emailVerificationCode: string };
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const StepInput2: React.FC<StepProps> = ({ signupData, onChange, onKeyDown }) => {
    return (
        <div>
            <StepInput 
                label="이메일"
                type="email"
                name="email"
                value={signupData.email}
                placeholder="이메일을 입력해주세요"
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <StepInput 
                label="인증번호"
                type="text"
                name="verificationCode"
                value={signupData.emailVerificationCode}
                placeholder="인증번호를 입력해주세요"
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </div>
    );
};

export default StepInput2;