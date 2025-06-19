import Button from "../../components/ui/button/Button";
import TranslatorForm from "../../components/translator/TranslatorForm";
import styles from './translater.module.scss';
import useDictionary from '../../hooks/useDictionary';
import { useState } from 'react';
import { getTranslation } from '../../api/translator';

export default function Translator() {

    const {
        addWord,
    } = useDictionary();

    const [wordInput, setWordInput] = useState('');
    const [translations, setTranslations] = useState([]);


    async function translate() {
        let result = await getTranslation(wordInput);
        setTranslations(result.translations ?? []);
    }

    function saveWord() {
        if (translations.length) {
            addWord({
                word: wordInput,
                translation: translations.join(', ')
            })
        }
    }

    return (
        <div className="container">
            <div className="title title--h2 mb-md">Переводчик</div>
            <TranslatorForm
                onChange={(e) => setWordInput(e.target.value)}
                word={wordInput}
                translations={translations}
            />
            <div className={styles.buttons}>
                <Button onClick={saveWord}>Сохранить в словарь</Button>
                <Button onClick={translate}>Перевести</Button>
            </div>
        </div>
    )
}