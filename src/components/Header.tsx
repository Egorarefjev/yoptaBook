import Button from "./ui/button/Button";
import { useAuth } from '../context/AuthContext';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES }from '../routes/constants'
import { NavLink } from 'react-router-dom'; // вместо Link

export default function Header() {

    const { logout, isAuth } = useAuth();

    return (
        <header className={styles.header}>
            <Link to='/'>
                <img src="svg/logo.svg" alt=""/>
            </Link>
            {isAuth &&
                <div className={styles.links}>
                    <NavLink to={ROUTES.TRANSLATOR} className={({ isActive }) => isActive ? 'link__active' : ''}>
                        Переводчик
                    </NavLink>
                    <NavLink to={ROUTES.DICTIONARY} className={({ isActive }) => isActive ? 'link__active' : ''}>
                        Словарь
                    </NavLink>
                    <NavLink to={ROUTES.ABOUT} className={({ isActive }) => isActive ? 'link__active' : ''}>
                        О проекте
                    </NavLink>
                </div>}
            {isAuth && <Button onClick={logout}>Выйти</Button>}
        </header>
    );
}