import { Outlet } from 'react-router-dom';
import NavBar from '../components//NavBar';
import type { NavItem } from '../types/ui';
import styles from './MainTemplate.module.scss';
import { ROUTES } from '../routes/constants.js';
import { useAuth } from '../context/AuthContext';

const NAV_ITEMS: NavItem[] = [
    { label: 'Словарь', to: ROUTES.DICTIONARY },
    { label: 'Переводчик', to: ROUTES.TRANSLATOR },
    { label: 'О проекте', to: ROUTES.ABOUT }
];

export default function MainTemplate() {
   const { isAuth } = useAuth();


    return (
        <div className={styles.layout}>
            {isAuth && <NavBar navItems={NAV_ITEMS} />}
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    );
}
