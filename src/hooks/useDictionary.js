import { useEffect, useState } from 'react';
import { apiGetWords, apiCreateWord, apiDeleteWord, apiGetTags, apiGetWordsByTag } from '../api/dictionary.js';

export default function useDictionary() {
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [tags, setTags] = useState([]);

    const fetchWords = async (tag = '') => {
        setLoading(true);
        try {
            const data = tag
                ? await apiGetWordsByTag(tag)
                : await apiGetWords();

            setWords(data);
        } catch (err) {
            setError(err.message || 'Ошибка при загрузке слов');
        } finally {
            setLoading(false);
        }
    };


    const fetchTags = async () => {
        try {
            const data = await apiGetTags();
            setTags(data);
        } catch (err) {
            setError(err.message || 'Неизвестная ошибка');
        }
    };

    const addWord = async ({ word, translation, description, tags }) => {
        try {
            const newWord = await apiCreateWord(word, translation, description, tags);
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

    return {
        words,
        tags,
        loading,
        error,
        fetchWords,
        fetchTags,
        addWord,
        deleteWord,
    };
}
