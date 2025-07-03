export interface ButtonProps {
    size: "Extra-Large" | "Large" | "Medium" | "Small";
    color: "Primary" | "AlterNative"| "Assistive" | "Gray" | "Secondary";
    onClick?: () => void;
}