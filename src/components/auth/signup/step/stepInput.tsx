import React from 'react';

interface StepInputProps {
    label: string;
    type: string;
    name: string;
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const StepInput: React.FC<StepInputProps> = ({ label, type, name, value, placeholder, onChange, onKeyDown }) => {
    return (
        <div className="step-input">
            <label>{label}</label>
            <input 
                type={type} 
                name={name} 
                value={value} 
                placeholder={placeholder} 
                onChange={onChange} 
                onKeyDown={onKeyDown}
            />
        </div>
    );
};

export default StepInput;