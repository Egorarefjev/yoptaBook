import { useParams } from "react-router-dom";
import { useEffect} from "react";
import useLessons from '../../hooks/useLessons';
import { useNavigate } from 'react-router-dom';
import CategoryCard from '../../components/lessons/CategoryCard';
import styles from './LessonCategory.module.scss';

export default function LessonCategory() {
    const navigate = useNavigate();
    const { category } = useParams();
    const { loading, error, lessonsByCategory, fetchLessonsByCategory } = useLessons();

    useEffect(() => {
       void fetchLessonsByCategory(category!);
    }, [category])

    const openLesson = (slug) => {
        navigate(`/lessons/${category}/${slug}`);
    };


    return <div className='container'>
                <div className="title title--h2 mb-md">
                    {category}
                </div>
                <div className={styles.contentGrid}>
                    {lessonsByCategory.length > 0 ? (
                        lessonsByCategory.map((lesson) => (
                            <CategoryCard
                                key={lesson.id}
                                title={lesson.title}
                                onClickAction={() => openLesson(lesson.slug)}
                            />
                        ))
                    ) : (
                        <div>
                            Пока нет уроков по этой теме
                        </div>
                    )}
                </div>
            </div>
}