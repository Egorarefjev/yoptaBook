import NavList from './ui/navigation/NavList';
import styles from './NavBar.module.scss';
import Button from '../components/ui/button/Button';
import type { NavListProps } from '../types/ui';
import { useAuth } from '../context/AuthContext';


export default function NavBar({ navItems }: NavListProps) {
    const { logout } = useAuth();

    return (
        <aside className={styles.navbar}>
            <div className={styles.top}>
                <div className={styles.logo}>
                    <img src="svg/logo.svg" alt=""/>
                </div>
                <NavList navItems={navItems} className={styles.navList} />
            </div>

            <div className={styles.footer}>
                <div className={styles.footerButton}>
                    <Button
                        onClick={logout}
                    >
                        Выйти
                    </Button>
                </div>

                <div className={styles.copyright}>
                    © 2025 Yopta Inc.
                </div>
            </div>
        </aside>
    );
}
