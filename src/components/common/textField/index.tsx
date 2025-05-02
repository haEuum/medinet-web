import React from 'react';
import './style.scss';

interface TextFieldProps {
    label: string;
    type: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({
    label,
    type,
    name,
    placeholder,
    value,
    onChange,
}: TextFieldProps) => {
    return (
        <div className='text-field'>
            <label htmlFor={ name } className='text-field-label'>
                { label }
            </label>
            <input
                type={ type }
                name={ name }
                placeholder={ placeholder }
                value={ value }
                onChange={ onChange }
                className='text-field-input'
            />
        </div> 
    );
};

export default TextField;