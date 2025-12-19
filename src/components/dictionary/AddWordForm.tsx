import { useEffect, useState } from 'react';
import Input from "../ui/input/Input";
import TextArea from '../ui/textarea/Textarea';
import Button from "../ui/button/Button";
import styles from './AddWordForm.module.scss';
import { parseTags } from "../../utils/parseTags";
import { AddWordInput, Word } from '../../types/words';
import {stringifyTags} from "../../utils/stringifyTags";

type AddWordFormProps = {
    editedWord?: Word | null;
    onSubmit: (data: AddWordInput) => void;
    onReset?: () => void;
    submitButtonText?: string;
    resetButtonText?: string;
}


export default function AddWordForm({ onSubmit, onReset, editedWord, submitButtonText, resetButtonText }: AddWordFormProps) {
    const [word, setWord] = useState('');
    const [translation, setTranslation] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');

    useEffect(() => {
        setWord(editedWord?.word ?? '');
        setTranslation(editedWord?.translation ?? '');
        setDescription(editedWord?.description ?? '');
        setTags(editedWord?.tags ? stringifyTags(editedWord.tags) : '');
    }, [editedWord]);

    const resetForm = () => {
        setWord('');
        setTranslation('');
        setDescription('');
        setTags('');
    };

    const handleSubmit =  () => {
        if (!word.trim() || !translation.trim()) return;
            onSubmit({
                word: word.trim(),
                translation: translation.trim(),
                description: description.trim(),
                tags: parseTags(tags),
            });
            resetForm();
    }

    const onClickReset = () => {
        if (typeof onReset === "function") {
            onReset()
        } else {
            resetForm()
        }
    }


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
                <Button type='secondary' onClick={onClickReset}>{resetButtonText ? resetButtonText : 'Очистить'}</Button>
                <Button onClick={handleSubmit}>{submitButtonText ? submitButtonText : 'Добавить слово'}</Button>
            </div>
        </div>
    );
}

