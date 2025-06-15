import Button from "./ui/button/Button";
import { useAuth } from '../context/AuthContext';
import styles from './header.module.scss';

export default function Header() {

    const { logout, isAuth } = useAuth();

    function isAuthCheck() {
        console.log(isAuth)
    }

    return (
        <header className={styles.header}>
            <img src="public/svg/logo.svg" alt=""/>
            {isAuth && <Button onClick={logout}>Выйти</Button>}
        </header>
    );
}