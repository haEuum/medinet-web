export interface TextFieldProps {
    label?: string;
    type: string;
    showClear?: boolean;
    onClear?: () => void;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}