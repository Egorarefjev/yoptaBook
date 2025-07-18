import { Lesson } from '../lessons';

export type UseLessonsHook = {
    lessonsByCategory: Lesson[];
    lesson: Lesson | null;
    loading: boolean;
    error: string | null;
    fetchLessonsByCategory: (category: string) => Promise<void>;
    fetchLesson: (slug: string) => Promise<void>;
};