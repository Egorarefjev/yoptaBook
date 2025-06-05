import { useSelector, useDispatch } from 'react-redux';
import { addWord, removeWord } from './dictionarySlice';
import styles from './dictionary.module.scss';

export default function DictionaryPage() {

    const words = useSelector((state) => state.dictionary?.words);
    const dispatch = useDispatch();

    // Для теста — добавим слово при клике
    const handleAddWord = () => {
        const newWord = {
            word: 'cat',
            translation: 'кот',
            description: 'Маленький пушистый зверёк',
        };

        dispatch(addWord(newWord));
    };

    // Удаление слова
    const handleRemoveWord = (id) => {
        dispatch(removeWord(id));
    };

    return (
        <div>
            <h2>Словарь</h2>

            <button onClick={handleAddWord}>Добавить слово (тест)</button>

            <div className={styles.test}>

            </div>
        </div>
    );
}