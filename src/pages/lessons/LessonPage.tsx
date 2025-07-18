import { useParams } from "react-router-dom";
import useLessons from "../../hooks/useLessons";
import { useEffect } from "react";

export default function LessonPage() {
    const { slug } = useParams();
    const { loading, error, lesson, fetchLesson } = useLessons();

    useEffect(() => {
        void fetchLesson(slug);
    }, [])

    return <div className='container'>
        <div className="title title--h2 mb-md">
            {lesson.title}
        </div>
        {lesson.content.map(p => {
            return <p>{p}</p>
        })}
        {lesson.examples.map(example => {
            return <p>{example}</p>
        })}
        {lesson.notes.map(note => {
            return <p>{note}</p>
        })}
    </div>
}