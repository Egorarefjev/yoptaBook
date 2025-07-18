import Button from "../../components/ui/button/Button";
import TranslatorForm from "../../components/translator/TranslatorForm";
import styles from './translator.module.scss';
import useTranslator from '../../hooks/useTranslator';
import { LANGUAGES_LIST } from '../../constants/languages';
import { NotificationService } from '../../services/notificationService';
import { Status } from "../../types/statuses";
import useDictionary from "../../hooks/useDictionary";

export default function Translator() {
    const {
        word,
        setWord,
        language,
        setLanguage,
        translation,
        loading,
        translate,
    } = useTranslator();

    const { addWord } = useDictionary();

    const handleSave = async () => {
        if (!translation.trim() || !word.trim()) return;

        try {
            await addWord({
                word: word.trim(),
                translation: translation.trim(),
                tags: [], // без тегов
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
                <Button onClick={translate} loading={loading}>Перевести</Button>
            </div>
        </div>
    );
}
