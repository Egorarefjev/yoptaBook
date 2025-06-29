import { useState } from 'react';
import Input from "../ui/input/Input";
import TextArea from '../ui/textarea/Textarea';
import Button from "../ui/button/Button";
import styles from './AddWordForm.module.scss';
import { parseTags } from "../../utils/parseTags";

export default function AddWordForm({ onSubmit }) {
    const [word, setWord] = useState('');
    const [translation, setTranslation] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');

    const resetForm = () => {
        setWord('');
        setTranslation('');
        setDescription('');
        setTags('');
    };

    const handleSubmit = () => {
        if (!word.trim() || !translation.trim()) return;
        onSubmit({
            word: word.trim(),
            translation: translation.trim(),
            description: description.trim(),
            tags: parseTags(tags),
        });
        resetForm();
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
