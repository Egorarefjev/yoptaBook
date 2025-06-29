import { useState } from 'react';
import { getTranslation } from '../api/translator';
import useDictionary from './useDictionary';
import {parseTags} from "../utils/parseTags";

const DEFAULT_LANGUAGE = 'ru-eng'

export default function useTranslator() {
    const { addWord } = useDictionary();

    const [word, setWord] = useState('');
    const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
    const [translations, setTranslations] = useState<string[]>([]);
    const [tags, setTags] = useState<string>('');
    const [loading, setLoading] = useState(false);

    const [from, to] = language.split('-');

    async function translate() {
        if (!word.trim()) return;

        try {
            setLoading(true);
            const result = await getTranslation(word, from, to);
            setTranslations(result.translations ?? []);
        } catch (error) {
            console.error('Ошибка при переводе:', error);
        } finally {
            setLoading(false);
        }
    }

    function saveWord() {
        if (translations.length) {
            addWord({
                word,
                translation: translations.join(', '),
                tags: parseTags(tags),
            });
        }
    }

    return {
        word,
        tags,
        setWord,
        language,
        setLanguage,
        translations,
        loading,
        translate,
        saveWord,
        setTags
    };
}
