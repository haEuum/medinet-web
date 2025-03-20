import React from 'react';
import StepInput from './stepInput';

interface StepProps {
    signupData: { name: string; password: string };
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const StepInput1: React.FC<StepProps> = ({ signupData, onChange, onKeyDown }) => {
    return (
        <div>
            <StepInput 
                label="이름"
                type="text"
                name="name"
                value={signupData.name}
                placeholder="이름을 입력해주세요"
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <StepInput 
                label="비밀번호"
                type="password"
                name="password"
                value={signupData.password}
                placeholder="비밀번호를 입력해주세요"
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </div>
    );
};

export default StepInput1;