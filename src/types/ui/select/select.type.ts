export interface SelectOption {
    label: string;
    value: string;
}

export interface SelectProps {
    label?: string;
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options?: SelectOption[];
    disabled?: boolean;
    onKeyDown?: (e: React.KeyboardEvent<HTMLSelectElement>) => void;
}