import styles from './button.module.scss';
import LoaderMini from "../loaders/LoaderMini";

export default function Button({ children, onClick, disabled = false, loading = false }) {
    return (
            <button className={styles.button} onClick={onClick} disabled={disabled || loading}>
                {children} {loading && <LoaderMini size={18}/>}
            </button>
        );
}