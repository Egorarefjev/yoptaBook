import { useState } from 'react';
import Input from '../ui/input/Input';
import TextArea from '../ui/textarea/Textarea';
import Button from '../ui/button/Button';
import styles from './AddWordForm.module.scss';
import { parseTags } from '../../utils/parseTags';
import { AddWordInput } from '../../types/words';

interface AddWordFormProps {
    onSubmit: (word: AddWordInput) => void;
}

export default function AddWordForm({ onSubmit }: AddWordFormProps) {
    const [word, setWord] = useState<string>('');
    const [translation, setTranslation] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [tags, setTags] = useState<string>('');

    const resetForm = () => {
        setWord('');
        setTranslation('');
        setDescription('');
        setTags('');
    };

    const handleSubmit = () => {
        if (!word.trim() || !translation.trim()) return;

        const payload: AddWordInput = {
            word: word.trim(),
            translation: translation.trim(),
            description: description.trim(),
            tags: parseTags(tags),
        };

        onSubmit(payload);
        resetForm();
    };

    return (
        <div>
            <Input
                className="mb-md"
                value={word}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWord(e.target.value)}
                placeholder="Слово на английском"
            />
            <Input
                className="mb-md"
                value={translation}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTranslation(e.target.value)}
                placeholder="Перевод"
            />
            <Input
                className="mb-md"
                value={tags}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTags(e.target.value)}
                placeholder="Теги (через запятую)"
            />
            <TextArea
                className="mb-md"
                value={description}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
                placeholder="Описание слова"
            />

            <div className={styles.buttons}>
                <Button onClick={resetForm}>Очистить</Button>
                <Button onClick={handleSubmit}>Добавить слово</Button>
            </div>
        </div>
    );
}
