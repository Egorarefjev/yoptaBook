import { useParams } from "react-router-dom";
import useLessons from "../../hooks/useLessons";
import { useEffect } from "react";
import styles from './LessonPage.module.scss';

export default function LessonPage() {
    const { slug } = useParams();
    const { loading, error, lesson, fetchLesson } = useLessons();

    useEffect(() => {
        void fetchLesson(slug!);
    }, [slug]);

    if (loading) return <div className="container">Загрузка...</div>;
    if (error) return <div className="container">Ошибка: {error}</div>;
    if (!lesson) return null;

    return (
        <div className="container">
            <div className="title title--h2 mb-lg">{lesson.title}</div>

            <div className="mb-lg">
                {lesson.content.map((p, i) => (
                    <p key={i} className="mb-sm">{p}</p>
                ))}
            </div>

            {lesson.examples.length > 0 && (
                <div className="mb-lg">
                    <div className="title title--h3 mb-sm">Примеры</div>
                    {lesson.examples.map((ex, i) => (
                        <p key={i} className={styles.example}>{ex}</p>
                    ))}
                </div>
            )}

            {lesson.notes.length > 0 && (
                <div className="mb-lg">
                    <div className="title title--h3 mb-sm">Заметки</div>
                    {lesson.notes.map((note, i) => (
                        <p key={i} className={styles.note}>{note}</p>
                    ))}
                </div>
            )}
        </div>
    );
}
