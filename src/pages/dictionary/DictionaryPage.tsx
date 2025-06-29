import AddWordForm from '../../components/dictionary/AddWordForm';
import ShowWordForm from '../../components/dictionary/ShowWordForm';
import { useState, useEffect } from 'react';
import useDictionary from '../../hooks/useDictionary';
import styles from './dictionary.module.scss';
import LoaderMini from "../../components/ui/loaders/LoaderMini";
import Select from "../../components/ui/select/Select";
import { formatArrayToOptions } from "../../utils/formatForSelect";

export default function DictionaryPage() {
    const [wordInput, setWordInput] = useState('');
    const [translateInput, setTranslateInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    const [tagsInput, setTagsInput] = useState('');
    const [selectedTag, setSelectedTag] = useState('');

    const {
        words,
        addWord,
        deleteWord,
        loading,
        error,
        tags,
        fetchWords,
        fetchTags,
    } = useDictionary();

    useEffect(() => {
        fetchWords(selectedTag);
    }, [selectedTag]);

    useEffect(() => {
        fetchTags();
    }, [words]);

    const tagOptions = formatArrayToOptions(tags);
    //TODO вынести в утилиту
    tagOptions.push({
        value: '',
        label: 'Все теги'
    })


    const resetFields = () => {
        setWordInput('');
        setTranslateInput('');
        setDescriptionInput('');
    };

    const saveWord = async () => {
        if (!wordInput.trim() || !translateInput.trim()) return;
        const tags = tagsInput.split(',');

        await addWord({
            word: wordInput.trim(),
            translation: translateInput.trim(),
            description: descriptionInput.trim(),
            tags,
        });

        resetFields();
    };


    return (
        <div className="container">
            <div className="title title--h2 mb-md">Словарь</div>

            <div className="mb-lg">
                <p className="mb-md">
                    Тут всё просто: вводишь слово, перевод и описание, жмакаешь "Добавить слово".
                </p>

                <AddWordForm
                    onSubmit={addWord} />
            </div>
            <div className={styles.tags}>
                {tags.length > 1 && (
                    <Select
                        options={tagOptions}
                        value={selectedTag}
                        onChange={e => setSelectedTag(e)}
                        placeholder='Выберете тэг'
                    />
                )}
            </div>
            {loading && <LoaderMini />}

            {!loading && words?.length === 0 && (
                <div className={styles.empty}>
                    Пока слов нет. Добавь своё первое слово!
                </div>
            )}

            {!loading && words?.length > 0 && words.map((word) => (
                <ShowWordForm
                    key={word.id}
                    word={word.word}
                    translation={word.translation}
                    description={word.description}
                    tags={word.tags}
                    deleteWord={() => deleteWord(word.id)}
                />
            ))}
        </div>
    );
}
