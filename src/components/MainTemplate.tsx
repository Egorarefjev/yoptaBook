import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
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
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(prev => !prev);
    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <div className={styles.layout}>
            {isAuth && (
                <>
                    {!isSidebarOpen &&
                        <button className={styles.burger} onClick={toggleSidebar}>
                            ☰
                        </button>
                    }
                    <NavBar
                        navItems={NAV_ITEMS}
                        isOpen={isSidebarOpen}
                        onClose={closeSidebar}
                    />
                </>
            )}

            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    );
}

