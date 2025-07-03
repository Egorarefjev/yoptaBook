import { useState, useCallback, useMemo } from 'react';
import { getTranslation } from '../api/translator';
import useDictionary from './useDictionary';
import { parseTags } from '../utils/parseTags';
import { UseTranslatorResult } from '../types/hooks/useTranslator';

const DEFAULT_LANGUAGE = 'ru-eng';

export default function useTranslator(): UseTranslatorResult {
    const { addWord } = useDictionary();

    const [word, setWord] = useState('');
    const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
    const [translations, setTranslations] = useState<string[]>([]);
    const [tags, setTags] = useState('');
    const [loading, setLoading] = useState(false);

    const [from, to] = useMemo(() => language.split('-'), [language]);

    const translate = useCallback(async () => {
        if (!word.trim()) return;

        setLoading(true);
        try {
            const result = await getTranslation(word, from, to);
            setTranslations(result.translations ?? []);
        } catch (err) {
            if (err instanceof Error) {
                console.error('Ошибка при переводе:', err.message);
            } else {
                console.error('Неизвестная ошибка при переводе:', err);
            }
        } finally {
            setLoading(false);
        }
    }, [word, from, to]);

    const saveWord = useCallback(() => {
        if (!translations.length) return;

        addWord({
            word,
            translation: translations.join(', '),
            tags: parseTags(tags),
        });
    }, [word, translations, tags, addWord]);

    return {
        word,
        tags,
        setWord,
        language,
        setLanguage,
        setTags,
        translations,
        loading,
        translate,
        saveWord,
    };
}
