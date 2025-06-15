import { useEffect, useState } from 'react';
import { apiGetWords, apiCreateWord, apiDeleteWord } from '../api/dictionary.js';

export default function useDictionary() {
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWords = async () => {
        setLoading(true);
        try {
            const data = await apiGetWords();
            setWords(data);
        } catch (err) {
            setError(err.message || 'Неизвестная ошибка');
        } finally {
            setLoading(false);
        }
    };

    const addWord = async ({ word, translation, description }) => {
        try {
            const newWord = await apiCreateWord(word, translation, description);
            setWords((prev) => [newWord, ...prev]);
        } catch (err) {
            setError(err.message || 'Не удалось добавить слово');
        }
    };

    const deleteWord = async (id) => {
        try {
            await apiDeleteWord(id);
            setWords((prev) => prev.filter((word) => word.id !== id));
        } catch (err) {
            setError(err.message || 'Не удалось удалить слово');
        }
    };

    useEffect(() => {
        fetchWords();
    }, []);

    return {
        words,
        loading,
        error,
        fetchWords,
        addWord,
        deleteWord,
    };
}
