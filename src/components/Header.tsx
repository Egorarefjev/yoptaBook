import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <nav className="header__nav">
                <Link to="/">🏠 Главная</Link>
                <Link to="/result">📊 Результат</Link>
            </nav>
        </header>
    );
}