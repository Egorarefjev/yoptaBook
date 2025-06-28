import AddWordForm from '../../components/dictionary/AddWordForm';
import ShowWordForm from '../../components/dictionary/ShowWordForm';
import Button from "../../components/ui/button/Button";
import { useState } from 'react';
import useDictionary from '../../hooks/useDictionary';
import styles from './dictionary.module.scss';
import LoaderMini from "../../components/ui/loaders/LoaderMini";

export default function DictionaryPage() {
    const [wordInput, setWordInput] = useState('');
    const [translateInput, setTranslateInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');

    const {
        words,
        addWord,
        deleteWord,
        loading,
        error,
    } = useDictionary();

    const resetFields = () => {
        setWordInput('');
        setTranslateInput('');
        setDescriptionInput('');
    };

    const saveWord = async () => {
        if (!wordInput.trim() || !translateInput.trim()) return;

        await addWord({
            word: wordInput.trim(),
            translation: translateInput.trim(),
            description: descriptionInput.trim(),
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
                    onChangeWord={(e) => setWordInput(e.target.value)}
                    onChangeTranslation={(e) => setTranslateInput(e.target.value)}
                    onChangeDescription={(e) => setDescriptionInput(e.target.value)}
                    wordValue={wordInput}
                    translateValue={translateInput}
                    descriptionValue={descriptionInput}
                />

                <div className={styles.buttons}>
                    <Button onClick={resetFields}>Очистить поля</Button>
                    <Button onClick={saveWord}>Добавить слово</Button>
                </div>
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
                    deleteWord={() => deleteWord(word.id)}
                />
            ))}
        </div>
    );
}
