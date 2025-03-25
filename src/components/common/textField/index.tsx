import React from 'react';
import './style.scss';

interface TextFieldProps {
    label: string;
    type?: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const TextField = ({ label, type='text', name, placeholder, value, onChange }: TextFieldProps) => {
    return (
        <div className='input-container'>
            <label className='input-label'>{label}</label>
            <div className='input-box'>
                <input 
                    className='input'
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default TextField;