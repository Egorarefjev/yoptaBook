import { Link, useLocation } from 'react-router-dom';
import styles from './breadcrumbs.module.scss';

interface BreadcrumbsProps {
    breadcrumbsMap?: Record<string, string>;
}

export default function Breadcrumbs({ breadcrumbsMap = {} }: BreadcrumbsProps) {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(Boolean);

    if (pathnames.length === 0) return null;

    const buildName = (segment: string) => {
        return breadcrumbsMap[segment] || decodeURIComponent(segment);
    };

    return (
        <nav className={styles.breadcrumbs}>
            <Link to="/">Главная</Link>
            {pathnames.map((segment, index) => {
                const fullPath = '/' + pathnames.slice(0, index + 1).join('/');
                const isLast = index === pathnames.length - 1;

                return isLast ? (
                    <span key={fullPath}> / {buildName(segment)}</span>
                ) : (
                    <Link key={fullPath} to={fullPath}> / {buildName(segment)}</Link>
                );
            })}
        </nav>
    );
}
