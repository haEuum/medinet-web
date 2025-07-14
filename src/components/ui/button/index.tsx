import styles from "./style.module.scss";
import { ButtonProps } from "@/types/ui/button/button.type";
import classNames from "classnames";

const Button = ({ size, color, onClick, text }: ButtonProps) => {
    const sizeClass = {
        "Extra-Large": styles.extraLarge,
        "Large": styles.large,
        "Medium": styles.medium,
        "Small": styles.small,
    }[size];

    const colorClass = {
        Primary: styles.primary,
        AlterNative: styles.alterNative,
        Assistive: styles.assistive,
        Gray: styles.gray,
    }[color];

    return (
        <button className={classNames(styles.button, sizeClass, colorClass)} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;