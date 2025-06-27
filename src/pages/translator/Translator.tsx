import Button from "../../components/ui/button/Button";
import TranslatorForm from "../../components/translator/TranslatorForm";
import styles from './translator.module.scss';
import useTranslator from '../../hooks/useTranslator';
import { getTranslation } from '../../api/translator';
import { LANGUAGES_LIST } from '../../helpers/consts';
import LoaderMini from "../../components/ui/loaders/LoaderMini";

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

    return (
        <div className="container">
            <div className="title title--h2 mb-md">Переводчик</div>
            <TranslatorForm
                onChange={(e) => setWord(e.target.value)}
                onChangeSelect={(e) => setLanguage(e)}
                word={word}
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
                <Button onClick={saveWord}>Сохранить в словарь</Button>
                <Button onClick={translate}>Перевести</Button>
            </div>
        </div>
    )
}