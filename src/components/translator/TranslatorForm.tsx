import Input from "../ui/input/Input";
import Select from "../ui/select/Select";
import styles from './TranslatorForm.module.scss';
import { InputProps } from '../../types/ui';

export default function TranslatorForm({
                                           onChange,
                                           onChangeSelect,
                                           word,
                                           languagesList,
                                           selectedLanguage,
                                           translate
                                           }) {


    return (
        <div>
            <Input
                value={word}
                placeholder='Введите слово'
                className='mb-sm'
                onChange={onChange}
            />
            <Input
                value={translate}
                placeholder='Перевод'
                className='mb-sm'
                disabled={true}
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