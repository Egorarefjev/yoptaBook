import styles from './RadioGroup.module.scss';
import { RadioGroupProps } from '../../../types/ui';

export default function RadioGroup({ options, value, onChange, className = '' }: RadioGroupProps) {
    return (
        <div className={`${styles.group} ${className}`}>
            {options.map((option) => (
                <label key={option.value} className={styles.radio}>
                    <input
                        type="radio"
                        checked={value === option.value}
                        onChange={() => onChange(option.value)}
                    />
                    <span className={styles.custom} />
                    <span className={styles.label}>{option.label}</span>
                </label>
            ))}
        </div>
    );
}
