import Button from "../../components/ui/button/Button";
import TranslatorForm from "../../components/translator/TranslatorForm";
import styles from './translator.module.scss';
import useTranslator from '../../hooks/useTranslator';
import { LANGUAGES_LIST } from '../../helpers/consts';
import LoaderMini from "../../components/ui/loaders/LoaderMini";
import { NotificationService } from '../../services/notificationService';
import {Status} from "../../types/statuses";


export default function Translator() {

    const {
        word,
        setWord,
        language,
        setLanguage,
        translations,
        loading,
        translate,
        saveWord
    } = useTranslator();

    const handleSave = async () => {
        try {
            await saveWord();
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
                onChangeSelect={(e) => setLanguage(e)}
                word={word}
                translate={translate}
                languagesList={LANGUAGES_LIST}
                selectedLanguage={language}
            />

            <div>
                {loading ? (
                    <LoaderMini/>
                ) : (
                    translations.length > 0 && (
                        <>
                            <div className="title title--h2">Перевод</div>
                            {translations.map((t, index) => (
                                <p key={index}>{t}</p>
                            ))}
                        </>
                    )
                )}
            </div>

            <div className={styles.buttons}>
                <Button onClick={handleSave}>Сохранить в словарь</Button>
                <Button onClick={translate} loading={loading}>Перевести</Button>
            </div>
        </div>
    )
}