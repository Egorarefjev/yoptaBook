import styles from './button.module.scss';

export default function Button({ children, onClick }) {
    return (
            <div className={styles.button} onClick={onClick}>
                { children }
            </div>
        );
}