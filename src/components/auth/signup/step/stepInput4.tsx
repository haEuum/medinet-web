import React from 'react';
import StepInput from './stepInput';

interface StepProps {
    signupData: { userClass: string; field: string };
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const StepInput4: React.FC<StepProps> = ({ signupData, onChange, onKeyDown }) => {
    return (
        <div>
            <StepInput 
                label="소속"
                type="text"
                name="userClass"
                value={signupData.userClass}
                placeholder="소속을 입력해주세요"
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <StepInput 
                label="직군"
                type="text"
                name=""
                value={signupData.field}
                placeholder="직군을 입력해주세요"
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </div>
    );
};

export default StepInput4;