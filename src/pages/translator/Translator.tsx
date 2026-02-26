import Button from "../../components/ui/button/Button";
import TranslatorForm from "../../components/translator/TranslatorForm";
import styles from './translator.module.scss';
import useTranslator from '../../hooks/useTranslator';
import { LANGUAGES_LIST } from '../../constants/languages';
import { NotificationService } from '../../services/notificationService';
import { Status } from "../../types/statuses";
import useDictionary from "../../hooks/useDictionary";
import useLanguage from "../../hooks/useLanguage";
import useEnrich from "../../hooks/useEnrich";
import { useState } from 'react';

export default function Translator() {
    const [word, setWord] = useState<string>("");

    const {
        language,
        setLanguage,
        from,
        to
    } = useLanguage();

    const {
        translation,
        loading,
        translate,
    } = useTranslator();

    const {
        enrich
    } = useEnrich();

    const { addWord } = useDictionary();

    const handleEnrich = async () => {
       void enrich(word, from, to);
    }

    const handleTranslate = async () => {
        void translate(word, from, to);
    }

    const handleSave = async () => {
        if (!translation.trim() || !word.trim()) return;

        try {
            await addWord({
                word: word.trim(),
                translation: translation.trim(),
            });
            NotificationService.notify(`Слово "${word}" добавлено!`, Status.Success);
        } catch (e) {
            NotificationService.notify('Не удалось сохранить слово', Status.Error);
        }
    };

    return (
        <div className="container">
            <div className="title title--h2 mb-md">Переводчик</div>

            <TranslatorForm
                onChange={(e) => setWord(e.target.value)}
                onChangeSelect={setLanguage}
                word={word}
                languagesList={LANGUAGES_LIST}
                translation={translation}
                selectedLanguage={language}
                loading={loading}
            />

            <div className={styles.buttons}>
                <Button onClick={handleSave} disabled={!translation}>Сохранить в словарь</Button>
                <Button onClick={handleEnrich} disabled={!word}>Обогатить </Button>
                <Button onClick={handleTranslate} loading={loading}>Перевести</Button>
            </div>
        </div>
    );
}
