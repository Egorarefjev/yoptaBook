import AddWordForm from '../../components/dictionary/AddWordForm';
import ShowWordForm from '../../components/dictionary/ShowWordForm';
import Button from "../../components/ui/button/Button";
import { useState, useEffect } from 'react';
import styles from './dictionary.module.scss'

export default function DictionaryPage() {

    const WORD_FOR_TEST = [
        {
            id: 1,
            word: 'apple',
            translation: 'яблоко',
            description: 'Фрукт, обычно красный или зелёный, сладкий на вкус.',
            created_at: '2025-06-01T10:30:00Z'
        },
        {
            id: 2,
            word: 'run',
            translation: 'бегать',
            description: 'Двигаться быстро, используя ноги.',
            created_at: '2025-06-02T12:00:00Z'
        },
        {
            id: 3,
            word: 'code',
            translation: 'код',
            description: 'Набор инструкций для компьютера, написанный программистом.',
            created_at: '2025-06-03T15:15:00Z'
        },
        {
            id: 4,
            word: 'react',
            translation: 'реагировать / React',
            description: 'Фреймворк для создания интерфейсов. Компонентный подход.',
            created_at: '2025-06-04T09:00:00Z'
        },
        {
            id: 5,
            word: 'sun',
            translation: 'солнце',
            description: 'Звезда в центре нашей солнечной системы.',
            created_at: '2025-06-05T18:45:00Z'
        }
    ];

    const [wordInput, setWordInput] = useState('');
    const [translateInput, setTranslateInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    const [words, setWords] = useState(WORD_FOR_TEST);

    function saveWord() {

    }

    function resetFields() {
        setWordInput('');
        setTranslateInput('');
        setDescriptionInput('');
    }




    return (
        <div className="container">
            <div className="title title--h2 mb-md">Словарь</div>
            <div className='mb-lg'>
                <p className='mb-md'>
                  Тут всё просто, вводишь слово, перевод и описание, жмакаешь "Добавить слово".
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
                    <Button onClick={resetFields}>
                        Очистить поля
                    </Button>
                    <Button onClick={saveWord}>
                        Добавить слово
                    </Button>
                </div>
            </div>



            <div>
                {words.map((word) => (
                    <ShowWordForm
                        id={word.id}
                        word={word.word}
                        translation={word.translation}
                        description={word.description}
                    />
                ))}
            </div>

        </div>
    );
}