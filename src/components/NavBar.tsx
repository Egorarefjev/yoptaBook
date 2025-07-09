import NavList from './ui/navigation/NavList';
import styles from './NavBar.module.scss';
import Button from '../components/ui/button/Button';
import type { NavItem } from '../types/ui';
import { useAuth } from '../context/AuthContext';

interface NavBarProps {
    navItems: NavItem[];
    isOpen?: boolean;
    onClose?: () => void;
}

export default function NavBar({ navItems, isOpen = true, onClose }: NavBarProps) {
    const { logout } = useAuth();

    return (
        <aside className={`${styles.navbar} ${isOpen ? styles.open : ''}`}>
            <button
                className={styles.toggleButton}
                onClick={onClose}
                aria-label="Close sidebar"
            >
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="2" />
                    <line x1="20" y1="4" x2="4" y2="20" stroke="currentColor" strokeWidth="2" />
                </svg>
            </button>

            <div className={styles.top}>
                <div className={styles.logo}>
                    <img src="svg/logo.svg" alt="YoptaBook" />
                </div>
                <NavList navItems={navItems} className={styles.navList} />
            </div>

            <div className={styles.footer}>
                <div className={styles.footerButton}>
                    <Button onClick={logout}>Выйти</Button>
                </div>
                <div className={styles.copyright}>© 2025 Yopta Inc.</div>
            </div>
        </aside>
    );
}
