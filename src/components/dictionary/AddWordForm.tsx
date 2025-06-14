import Input from "../ui/input/Input";
import TextArea from '../ui/textarea/Textarea';

export default function AddWordForm(
    {
        onChangeWord,
        onChangeTranslation,
        onChangeDescription,
        wordValue,
        translateValue,
        descriptionValue,
    })
{
    return (
        <div>
            <Input className='mb-md' value={wordValue} onChange={onChangeWord} placeholder='Слово на английском'/>
            <Input className='mb-md' value={translateValue} onChange={onChangeTranslation} placeholder='Перевод'/>
            <TextArea className='mb-md' value={descriptionValue} onChange={onChangeDescription} placeholder='Описание слова'/>
        </div>
    )
}