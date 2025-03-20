import React from 'react';
import StepInput from './stepInput';

interface StepProps {
    signupData: { phone: string; phoneVerificationCode: string };
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const StepInput3: React.FC<StepProps> = ({ signupData, onChange, onKeyDown }) => {
    return (
        <div>
            <StepInput 
                label="전화번호"
                type="text"
                name="phone"
                value={signupData.phone}
                placeholder="전화번호를 입력해주세요"
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <StepInput 
                label="인증번호"
                type="text"
                name="verificationCode"
                value={signupData.phoneVerificationCode}
                placeholder="인증번호를 입력해주세요"
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </div>
    );
};

export default StepInput3;