import Input from "../ui/input/Input";
import ShowWordForm from "../dictionary/ShowWordForm";
import Select from "../ui/select/Select";
import styles from './TranslatorForm.module.scss';

export default function TranslatorForm({
                                           onChange,
                                           onChangeSelect,
                                           word,
                                           languagesList,
                                           selectedLanguage,
                                           tags,
                                           onChangeTags}) {


    return (
        <div>
            <Input
                value={word}
                placeholder='Введите слово'
                className='mb-sm'
                onChange={onChange}
            />
            <Input
                className='mb-md'
                value={tags}
                onChange={(e) => onChangeTags(e.target.value)}
                placeholder='Теги (через запятую)'
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