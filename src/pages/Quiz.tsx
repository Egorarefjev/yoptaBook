import { useParams } from 'react-router-dom';

export default function Quiz() {
    const { id } = useParams();

    return (
        <div>
            <h2>Квиз: {id}</h2>
            <p>Тут будет список вопросов...</p>
        </div>
    );
}