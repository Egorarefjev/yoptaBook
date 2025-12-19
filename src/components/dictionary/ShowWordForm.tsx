import styles from './showWordForm.module.scss';
import { X, Archive, ArchiveRestore, Pencil } from 'lucide-react';


export interface ShowWordFormProps {
    word: string;
    translation: string;
    description?: string | null;
    tags?: string[] | null;
    isShowTranslate: boolean;
    deleteWord: () => void;
    onClickUpdate: () => void;
    onClickTag?: (tag: string) => void;
    archiveWord: () => void;
    isArchived?: boolean
}

export default function ShowWordForm({
                                         word,
                                         translation,
                                         description,
                                         tags,
                                         isShowTranslate = true,
                                         deleteWord,
                                         onClickTag,
                                         onClickUpdate,
                                         archiveWord,
                                         isArchived
                                     }: ShowWordFormProps) {
    return (
        <div className={styles['word-card']}>
            <div className={styles['word-header']}>
                <div className={styles['word__title']}>{word}</div>
                <span
                    className={`${styles['word__translation']} ${
                        isShowTranslate ? styles['visible'] : styles['hidden']
                    }`}
                >
                    ({translation})
                </span>
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

            <div className={styles['buttons']}>
                <div onClick={onClickUpdate} className={styles['buttons__button']}>
                    <Pencil
                        size={16}
                        strokeWidth={1.75}
                    />
                </div>
                <div onClick={archiveWord} className={styles['buttons__button']}>
                    {isArchived ?
                        <ArchiveRestore
                            size={16}
                            strokeWidth={1.75}
                        />
                        : <Archive
                            size={16}
                            strokeWidth={1.75}
                        />

                    }
                </div>
                <div onClick={deleteWord} className={styles['buttons__button']}>
                    <X
                        size={16}
                        strokeWidth={1.75}
                    />
                </div>
            </div>
        </div>
    );
}
