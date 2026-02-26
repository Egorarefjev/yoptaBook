import { useState, useCallback, useMemo } from 'react';
import { getTranslation } from '../api/translator';
import { UseTranslatorResult } from '../types/hooks/useTranslator';

export default function useTranslator(): UseTranslatorResult {
    const [translation, setTranslation] = useState<string>('');
    const [loading, setLoading] = useState(false);

    const translate = useCallback(async (word=<string>(''), from=<string>('ru'), to=<string>('en')) => {
        if (!word.trim()) return;
        setLoading(true);
        try {
            const result = await getTranslation(word, from, to);
            setTranslation(result.translation ?? '');
        } catch (err) {
            if (err instanceof Error) {
                console.error('Ошибка при переводе:', err.message);
            } else {
                console.error('Неизвестная ошибка при переводе:', err);
            }
        } finally {
            setLoading(false);
        }
    }, []);


    return {
        translation,
        loading,
        translate,
    };
}
