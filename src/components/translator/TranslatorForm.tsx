import Input from "../ui/input/Input";
import ShowWordForm from "../dictionary/ShowWordForm";

export default function TranslatorForm({onChange, word, translations}) {
    return (
        <div>
            <Input
                value={word}
                placeholder='Введите слово на русском'
                className='mb-sm'
                onChange={onChange}/>

            <div>
                {translations.length > 0 && <div className='title title--h2'>Перевод</div>}
                {translations?.map((translate) => ( <p>{translate}</p>))}
            </div>

        </div>
    )
}