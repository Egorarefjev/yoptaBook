import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import type { NavItem } from '../types/ui';
import styles from './MainTemplate.module.scss';
import { ROUTES } from '../routes/constants.js';
import { useAuth } from '../context/AuthContext';
import Icon from "./ui/icons/Icon";

const NAV_ITEMS: NavItem[] = [
    { label: 'Словарь', to: ROUTES.DICTIONARY },
    { label: 'Переводчик', to: ROUTES.TRANSLATOR },
    { label: 'Уроки', to: ROUTES.LESSONS },
    { label: 'О проекте', to: ROUTES.ABOUT },
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
                            <Icon name='menu' size={24} />
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

