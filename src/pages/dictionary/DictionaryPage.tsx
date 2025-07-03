import { useState, useEffect } from 'react';
import AddWordForm from '../../components/dictionary/AddWordForm';
import ShowWordForm from '../../components/dictionary/ShowWordForm';
import useDictionary from '../../hooks/useDictionary';
import useTags from '../../hooks/useTags';
import LoaderMini from '../../components/ui/loaders/LoaderMini';
import Select from '../../components/ui/select/Select';
import { formatArrayToOptions } from '../../utils/formatForSelect';
import { AddWordInput } from '../../types/words';
import styles from './dictionary.module.scss';

export default function DictionaryPage() {
    const [selectedTag, setSelectedTag] = useState<string>('');

    const {
        words,
        addWord,
        deleteWord,
        loadingWords,
        errorWords,
        fetchWords,
    } = useDictionary();

    const {
        tags,
        loadingTags,
        errorTags,
        fetchTags,
    } = useTags();

    useEffect(() => {
        void fetchWords(selectedTag);
    }, [selectedTag]);

    useEffect(() => {
        void fetchTags();
    }, [words]);

    const tagOptions = formatArrayToOptions(tags, true, 'Все слова');

    return (
        <div className="container">
            <div className="title title--h2 mb-md">Словарь</div>

            <div className="mb-sm">
                <p className="mb-md">
                    Тут всё просто: вводишь слово, перевод и описание, жмакаешь "Добавить слово".
                </p>

                <AddWordForm onSubmit={addWord} />
            </div>

            <div className={styles.tags}>
                {tags.length > 0 && (
                    <Select
                        options={tagOptions}
                        value={selectedTag}
                        onChange={setSelectedTag}
                        placeholder="Выберите тэг"
                    />
                )}
            </div>

            {(loadingWords || loadingTags) && <LoaderMini />}

            {!loadingWords && words.length === 0 && (
                <div className={styles.empty}>
                    Пока слов нет. Добавь своё первое слово!
                </div>
            )}

            {!loadingWords &&
                words.map((word) => (
                    <ShowWordForm
                        key={word.id}
                        word={word.word}
                        translation={word.translation}
                        description={word.description}
                        tags={word.tags}
                        onClickTag={setSelectedTag}
                        deleteWord={() => deleteWord(word.id)}
                    />
                ))}
        </div>
    );
}

