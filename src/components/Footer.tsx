import styles from './footer.module.scss';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div>© {currentYear} Yopta Book </div>
        </footer>
    );
}