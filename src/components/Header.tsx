import Button from "./ui/button/Button";
import { useAuth } from '../context/AuthContext';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES }from '../routes/constants'

export default function Header() {

    const { logout, isAuth } = useAuth();

    return (
        <header className={styles.header}>
            <Link to='/'>
                <img src="svg/logo.svg" alt=""/>
            </Link>
            {isAuth &&
                <div className={styles.links}>
                    <Link to={ ROUTES.TRANSLATOR }>Переводчик</Link>
                    <Link to={ ROUTES.DICTIONARY }>Словарь</Link>
                    <Link to={ ROUTES.ABOUT }>О проекте</Link>
                </div>}
            {isAuth && <Button onClick={logout}>Выйти</Button>}
        </header>
    );
}