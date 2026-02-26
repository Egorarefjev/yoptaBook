import { useState, useCallback } from 'react';
import { getEnrich } from '../api/translator';

export default function useEnrich() {
    const [loading, setLoading] = useState(false);
    const [card, setCard] = useState({});

    const enrich = useCallback(async (word=<string>(''), from=<string>('ru'), to=<string>('en')) => {
        if (!word.trim()) return;
        setLoading(true);
        try {
            const result = await getEnrich(word, from, to);
            setCard(result);
        } catch (err) {
            if (err instanceof Error) {
                console.error('Ошибка при переводе:', err.message);
            } else {
                console.error('Неизвестная ошибка при переводе:', err);
            }
        } finally {
            setLoading(false);
        }
    },[]);

    return {
        enrich,
        card,
        loading,
    };
}
