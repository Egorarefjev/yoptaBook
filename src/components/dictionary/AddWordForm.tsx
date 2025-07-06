import { useState } from 'react';
import Input from "../ui/input/Input";
import TextArea from '../ui/textarea/Textarea';
import Button from "../ui/button/Button";
import styles from './AddWordForm.module.scss';
import { parseTags } from "../../utils/parseTags";
import { AddWordInput } from '../../types/words';
import { Status } from "../../types/statuses";

type AddWordFormProps = {
    onSubmit: (data: AddWordInput) => void;
    onResult?: (status: Status) => void;
}


export default function AddWordForm({ onSubmit, onResult }: AddWordFormProps) {
    const [word, setWord] = useState('');
    const [translation, setTranslation] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
    const [status, setStatus] = useState<'success' | 'error' | null>(null);

    const resetForm = () => {
        setWord('');
        setTranslation('');
        setDescription('');
        setTags('');
    };

    const handleSubmit = async () => {
        if (!word.trim() || !translation.trim()) return;

        try {
            await onSubmit({
                word: word.trim(),
                translation: translation.trim(),
                description: description.trim(),
                tags: parseTags(tags),
            });
            setStatus(Status.Success);
            onResult?.(Status.Success);
            resetForm();
        } catch {
            setStatus(Status.Error);
            onResult?.(Status.Error);
        }

        setTimeout(() => setStatus(null), 1500);
    };

    return (
        <div>
            <Input
                className='mb-md'
                value={word}
                onChange={(e) => setWord(e.target.value)}
                placeholder='Слово на английском'
            />
            <Input
                className='mb-md'
                value={translation}
                onChange={(e) => setTranslation(e.target.value)}
                placeholder='Перевод'
            />
            <Input
                className='mb-md'
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder='Теги (через запятую)'
            />
            <TextArea
                className='mb-md'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Описание слова'
            />

            <div className={styles.buttons}>
                <Button onClick={resetForm}>Очистить</Button>
                <Button onClick={handleSubmit}>Добавить слово</Button>
            </div>
        </div>
    );
}
