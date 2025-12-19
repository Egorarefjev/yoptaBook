import { useRef, useState, useCallback } from 'react';
import {
    apiGetWords,
    apiGetWordsByTag,
    apiCreateWord,
    apiDeleteWord,
    apiGetArchiveWords,
    apiUpdateWord,
} from '../api/dictionary';
import {Word, AddWordInput, UpdateWordInput} from '../types/words';
import { UseDictionaryResult } from '../types/hooks/useDictionary';


export default function useDictionary(): UseDictionaryResult {
    const [words, setWords] = useState<Word[]>([]);
    const [loadingWords, setLoadingWords] = useState(false);
    const [errorWords, setErrorWords] = useState<string | null>(null);

    const latestFetchId = useRef(0);

    const fetchWords = useCallback(async (tag = '', is_archived: boolean = false) => {
        const currentFetchId = ++latestFetchId.current;
        setLoadingWords(true);
        setErrorWords(null);

        try {
            let data = [];
            if (is_archived) {
                data = await apiGetArchiveWords();
            } else {
                data = tag
                    ? await apiGetWordsByTag(tag)
                    : await apiGetWords();
            }

            if (currentFetchId === latestFetchId.current) {
                setWords(data);
            }
        } catch (err) {
            if (currentFetchId === latestFetchId.current) {
                if (err instanceof Error) {
                    setErrorWords(err.message);
                } else {
                    setErrorWords('Неизвестная ошибка при загрузке слов');
                }
            }
        } finally {
            if (currentFetchId === latestFetchId.current) {
                setLoadingWords(false);
            }
        }
    }, []);

    const addWord = useCallback(async (input: AddWordInput) => {
        try {
            const newWord = await apiCreateWord(
                input.word,
                input.translation,
                input.description,
                input.tags
            );
            setWords((prev) => [newWord, ...prev]);
        } catch (err) {
            if (err instanceof Error) {
                setErrorWords(err.message);
            } else {
                setErrorWords('Не удалось добавить слово');
            }
        }
    }, []);

    const deleteWord = useCallback(async (id: number) => {
        try {
            await apiDeleteWord(id);
            setWords((prev) => prev.filter((word) => word.id !== id));
        } catch (err) {
            if (err instanceof Error) {
                setErrorWords(err.message);
            } else {
                setErrorWords('Не удалось удалить слово');
            }
        }
    }, []);

    const updateWord = useCallback(
        async (id: number, data: UpdateWordInput) => {
            try {
                const response = await apiUpdateWord(id, data);
                const updatedWord = response.word;
                setWords((currentWords) =>
                    currentWords.map((word) =>
                        word.id === updatedWord.id ? updatedWord : word
                    )
                );
            } catch (error) {
                setErrorWords('Не удалось обновить слово');
            }
        }, []);


    return {
        words,
        loadingWords,
        errorWords,
        fetchWords,
        addWord,
        deleteWord,
        updateWord
    };
}
