import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h2>Добро пожаловать в квиз!</h2>
            <p>Выберите квиз для прохождения:</p>
            <ul>
                <li><Link to="/quiz/html">Квиз по HTML</Link></li>
                <li><Link to="/quiz/css">Квиз по CSS</Link></li>
            </ul>
        </div>
    );
}