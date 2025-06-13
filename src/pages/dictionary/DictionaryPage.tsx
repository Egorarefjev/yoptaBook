import { useSelector, useDispatch } from 'react-redux';
import { addWord, removeWord } from './dictionarySlice';
import styles from './dictionary.module.scss';
import Button from '../../components/ui/button/Button';
import useAuth from '../../hooks/useAuth';

export default function DictionaryPage() {

    const { logout } = useAuth();

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
        <div className="container">
            <div className="title title--h2">Словарь</div>

            <div className={styles.test}>
                <Button onClick={logout} >Выйти из этой крыселовки</Button>
            </div>
        </div>
    );
}