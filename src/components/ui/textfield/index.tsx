import React from "react";
import styles from "./style.module.scss";
import { TextFieldProps } from "@/types/ui/textfield/textfield.type";
import XMark from "@/components/ui/icons/XMark";

const TextField = ({
                       label,
                       type,
                       name,
                       placeholder,
                       value,
                       onChange,
                       showClear = false,
                       onClear,
                   }: TextFieldProps) => {
    return (
        <div className={styles["text-field"]}>
            {label && (
                <label htmlFor={name} className={styles["text-field-label"]}>
                    {label}
                </label>
            )}
            <div className={styles["text-field-input-wrapper"]}>
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={styles["text-field-input"]}
                />
                {showClear && value && (
                    <button
                        type="button"
                        className={styles["clear-button"]}
                        onClick={onClear}
                    >
                        <XMark />
                    </button>
                )}
            </div>
        </div>
    );
};

export default TextField;