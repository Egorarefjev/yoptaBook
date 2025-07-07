import styles from './ToggleSwitch.module.scss';
import { CheckboxProps } from './../../../types/ui';

export default function ToggleSwitch({
                                         checked,
                                         onChange,
                                         disabled = false,
                                         className = '',
                                         label
                                     }: CheckboxProps) {
    return (
        <label className={`${styles.wrapper} ${className}`}>
            <div className={styles.switch}>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                    disabled={disabled}
                />
                <span className={styles.slider} />
            </div>
            {label && <span className={styles.label}>{label}</span>}
        </label>
    );
}
