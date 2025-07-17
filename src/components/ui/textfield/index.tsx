import React from "react";
import "./style.scss";
import { TextFieldProps } from "@/types/ui/textfield/textfield.type";
import XMark from "@/assets/textfield/XMark";

const TextField = ({
                       label,
                       type,
                       name,
                       placeholder,
                       value,
                       onChange,
                       showClear = false,
                       onClear,
                       onKeyDown,
                   }: TextFieldProps) => {
    return (
        <div className="text-field">
            {label && (
                <label htmlFor={name} className="text-field-label">
                    {label}
                </label>
            )}
            <div className="text-field-input-wrapper">
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="text-field-input"
                    onKeyDown={onKeyDown}
                />
                {showClear && value && (
                    <button
                        type="button"
                        className="clear-button"
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