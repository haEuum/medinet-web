import './style.scss';

interface ButtonProps {
    text: string;
    onClick: () => void;
};

const Button = ({ text, onClick }: ButtonProps) => {
    return (
        <button
            className='button-component'
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;