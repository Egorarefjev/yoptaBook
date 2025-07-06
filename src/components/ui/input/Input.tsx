import styles from './input.module.scss';
import { InputProps } from '../../../types/ui';

export default function Input({
                                  type = 'text',
                                  placeholder = '',
                                  value = '',
                                  className = '',
                                  onChange,
                                  disabled = false
                              }: InputProps) {
    return (
        <div className={className}>
            <input
                type={type}
                onChange={onChange}
                placeholder={placeholder}
                className={styles.input}
                value={value}
                disabled={disabled}
            />
        </div>
    );
}