import React from 'react';
import './style.scss';

interface ButtonProps {
    text: string;
    onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button onClick={ onClick } className="login-button">
            { text }
        </button>
    );
};

export default Button;