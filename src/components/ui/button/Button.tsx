import styles from './button.module.scss'

export default function Button({text}) {
    return (
            <div className={styles.button}>
                {text}
            </div>
        );
}