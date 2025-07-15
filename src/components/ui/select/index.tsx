import { SelectProps } from "@/types/ui/select/select.type";
import styles from "./style.module.scss";

const Select = ({
                         label,
                         name,
                         value,
                         onChange,
                         options,
                         disabled = false,
                     }: SelectProps) => {
    return (
        <div className={styles.selectGroup}>
            <label htmlFor={name} className={styles.selectLabel}>
                {label}
            </label>
            <select
                id={name}
                name={name}
                className={styles.select}
                value={value}
                onChange={onChange}
                disabled={disabled}
            >
                {options.map(({ label, value }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;