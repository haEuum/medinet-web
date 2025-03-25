import './style.scss';

interface ButtonProps {
    text: string;
    onClick: () => void;
};

const Button = ({ text, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} className='button-container'>
            { text }
        </button>
    );
};

export default Button;