import styles from './error.module.scss';

export default function Error({textError, className}) {
    return (
        <div className={`${styles.error} ${className || ''}`}>
            {textError}
        </div>
    )
}