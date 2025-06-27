import Input from "../ui/input/Input";
import ShowWordForm from "../dictionary/ShowWordForm";
import Select from "../ui/select/Select";
import styles from './TranslatorForm.module.scss';

export default function TranslatorForm({onChange, onChangeSelect, word, languagesList, selectedLanguage}) {


    return (
        <div>
            <Input
                value={word}
                placeholder='Введите слово'
                className='mb-sm'
                onChange={onChange}
            />
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