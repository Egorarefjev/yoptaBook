import { useParams } from "react-router-dom";
import { useEffect} from "react";
import useLessons from '../../hooks/useLessons';
import { useNavigate } from 'react-router-dom';

export default function LessonCategory() {
    const navigate = useNavigate();
    const { category } = useParams();
    const { loading, error, lessonsByCategory, fetchLessonsByCategory } = useLessons();

    useEffect(() => {
       void fetchLessonsByCategory(category);
    }, [])

    const openLesson = (slug) => {
        navigate(`/lessons/${category}/${slug}`);
    };


    return <div className='container'>
                <div className="title title--h2 mb-md">
                    {category}
                </div>
                { lessonsByCategory && (
                    lessonsByCategory.map((lesson) => {
                       return <div onClick={()=>openLesson(lesson.slug)}>{lesson.title}</div>
                    })
                )}
            </div>
}