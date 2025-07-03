import styles from './showWordForm.module.scss';

export interface ShowWordFormProps {
    word: string;
    translation: string;
    description?: string | null;
    tags?: string[] | null;
    deleteWord: () => void;
    onClickTag?: (tag: string) => void;
}

export default function ShowWordForm({
                                         word,
                                         translation,
                                         description,
                                         tags,
                                         deleteWord,
                                         onClickTag,
                                     }: ShowWordFormProps) {
    return (
        <div className={styles['word-card']}>
            <div className={styles['word-header']}>
                <div className={styles['word__title']}>{word}</div>
                <span className={styles['word__translation']}>({translation})</span>
            </div>

            {(tags && tags.length > 0) && (
                <div className={styles.tags}>
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className={styles.tag}
                            onClick={() => onClickTag?.(tag)}
                        >
              #{tag}
            </span>
                    ))}
                </div>
            )}

            {description && (
                <p className={styles['word__description']}>{description}</p>
            )}

            <div onClick={deleteWord} className={styles['close-button']}>
                X
            </div>
        </div>
    );
}
