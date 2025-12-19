import { useState, useCallback } from 'react';
import {  apiGetTags } from '../api/dictionary';
import { UseTagsResult } from '../types/hooks/useTags'

export default function useTags(): UseTagsResult {
    const [tags, setTags] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchTags = useCallback(async (isArchive:boolean) => {
        setLoading(true);
        setError(null);

        try {
            const data = await apiGetTags(isArchive);
            setTags(data);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Неизвестная ошибка при загрузке тегов');
            }
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        tags,
        loadingTags: loading,
        errorTags: error,
        fetchTags,
    };
}
