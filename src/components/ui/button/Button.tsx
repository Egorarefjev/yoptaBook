import styles from './button.module.scss';
import LoaderMini from '../loaders/LoaderMini';

type ButtonType = 'primary' | 'secondary' | 'danger' | 'ghost';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    type?: ButtonType;
};

export default function Button({
                                   children,
                                   onClick,
                                   disabled = false,
                                   loading = false,
                                   type = 'primary',
                               }: ButtonProps) {
    return (
        <button
            className={`${styles.button}
            ${styles[`type-${type}`]}`}
            onClick={onClick}
            disabled={disabled || loading}
        >
            {children}
            {loading && <LoaderMini size={18} />}
        </button>
    );
}
