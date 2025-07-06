import { useState, useCallback, useMemo } from 'react';
import { getTranslation } from '../api/translator';
import { UseTranslatorResult } from '../types/hooks/useTranslator';

const DEFAULT_LANGUAGE = 'ru-eng';

export default function useTranslator(): UseTranslatorResult {
    const [word, setWord] = useState('');
    const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
    const [translations, setTranslations] = useState<string[]>([]);
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

    const translation = useMemo(
        () => translations.join(', '),
        [translations]
    );

    return {
        word,
        setWord,
        language,
        setLanguage,
        translations,
        translation,
        loading,
        translate,
    };
}
