import { NavLink } from 'react-router-dom';
import styles from './NavList.module.scss';
import { NavListProps } from '../../../types/ui';


export default function NavList({ navItems, className = '' }: NavListProps) {
    return (
        <nav className={`${styles.nav} ${className}`}>
            {navItems.map((item) => (
                <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                        `${styles.link} ${isActive ? styles.active : ''}`
                    }
                >
                    <span className={styles.indicator} />
                    {item.label}
                </NavLink>
            ))}
        </nav>
    );
}

