import styles from './Checkbox.module.scss';
import { CheckboxProps } from '../../../types/ui';

export default function Checkbox({
                                     label,
                                     checked,
                                     onChange,
                                     className = '',
                                     disabled = false,
                                 }: CheckboxProps) {
    return (
        <label className={`${styles.checkboxWrapper} ${className}`}>
            <input
                type="checkbox"
                className={styles.checkboxInput}
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                disabled={disabled}
            />
            <span className={styles.checkboxCustom} />
            {label && <span className={styles.checkboxLabel}>{label}</span>}
        </label>
    );
}
