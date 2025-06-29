import styles from './showWordForm.module.scss'

export default function showWordForm({
    word,
    translation,
    description,
    tags = [],
    deleteWord
}) {
    return (
        <div className={styles['word-card']}>
            <div className={styles['word-header']}>
                <div className={styles['word__title']}>{word}</div>
                <span className={styles['word__translation']}>({translation})</span>
            </div>
            <div className={styles.tags}>
                {tags?.map((tag) => (
                    <span key={tag} className={styles.tag}>
                    #{tag}
                 </span>
                ))}
            </div>
            {description && <p className={styles['word__description']}>{description}</p>}

            <div onClick={deleteWord} className={styles['close-button']}>X</div>
        </div>
    );
}