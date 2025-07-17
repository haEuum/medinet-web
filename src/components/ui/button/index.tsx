import { ButtonProps } from "@/types/ui/button/button.type";
import classNames from "classnames";
import "./style.scss";

const Button = ({ size, color, onClick, text }: ButtonProps) => {
    const sizeClass = {
        "Extra-Large": "extra-large",
        "Large": "large",
        "Medium": "medium",
        "Small": "small",
    }[size];

    const colorClass = {
        Primary: "primary",
        AlterNative: "alternative",
        Assistive: "assistive",
        Gray: "gray",
    }[color];

    return (
        <button className={classNames("button", sizeClass, colorClass)} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;