import Input from "../ui/input/Input";
import Select from "../ui/select/Select";
import styles from './TranslatorForm.module.scss';
import Textarea from "../ui/textarea/Textarea";
import LoaderMini from '../ui/loaders/LoaderMini'

export default function TranslatorForm({
                                           onChange,
                                           onChangeSelect,
                                           word,
                                           languagesList,
                                           selectedLanguage,
                                           translation,
                                           loading
                                           }) {


    return (
        <div>
            <Input
                value={word}
                placeholder='Введите слово'
                className='mb-sm'
                onChange={onChange}
            />
            {loading ? (
                <div className={styles.translationBox}>
                    <LoaderMini />
                </div>
            ) : (
                <Textarea
                    value={translation}
                    placeholder="Перевод"
                    className="mb-sm"
                    readOnly
                />
            )}

            <div className={styles.select}>
                <Select
                    options={languagesList}
                    value={selectedLanguage}
                    onChange={onChangeSelect}
                />
            </div>
        </div>
    )
}