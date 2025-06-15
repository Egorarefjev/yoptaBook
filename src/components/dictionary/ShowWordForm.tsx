import styles from './showWordForm.module.scss'

export default function showWordForm({
    word,
    translation,
    description,
    deleteWord
}) {
    return (
        <div className={styles['word-card']}>
            <div className={styles['word-header']}>
                <div className={styles['word__title']}>{word}</div>
                <span className={styles['word__translation']}>({translation})</span>
            </div>
            {description && <p className={styles['word__description']}>{description}</p>}

            <div onClick={deleteWord} className={styles['close-button']}>X</div>
        </div>
    );
}