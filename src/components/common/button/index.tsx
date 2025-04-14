import './style.scss';

interface ButtonProps {
    text: string;
    onClick: () => void;
    width: string;
    height: string;
};

const Button = ({ text, onClick, width, height }: ButtonProps) => {
    return (
        <button
            className='button-component'
            onClick={onClick}
            style={{ width, height }}
        >
            {text}
        </button>
    );
};

export default Button;