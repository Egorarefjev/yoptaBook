import { useState, useCallback } from 'react';
import { apiGetLessonsByCategory, apiGetLesson } from '../api/lessons';
import { Lesson } from "../types/lessons";
import { UseLessonsHook } from "../types/hooks/useLessons";

export default function useLessons():UseLessonsHook {
    const [lessonsByCategory, setLessonsByCategory] = useState<Lesson[]>([]);
    const [lesson, setLesson] = useState<Lesson | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchLessonsByCategory = useCallback(async (category) => {
        setLoading(true);
        setError(null);

        try {
            const data = await apiGetLessonsByCategory(category);
            setLessonsByCategory(data);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Неизвестная ошибка при загрузке слов');
            }
        } finally {
            setLoading(false);
        }
    }, []);

    const fetchLesson = useCallback(async (slug) => {
        setLoading(true);
        setError(null);

        try {
            const data = await apiGetLesson(slug);
            setLesson(data);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Неизвестная ошибка при загрузке слов');
            }
        } finally {
            setLoading(false);
        }
    }, []);
    return {
        lessonsByCategory,
        lesson,
        loading: loading,
        error: error,
        fetchLessonsByCategory,
        fetchLesson,
    };
}
