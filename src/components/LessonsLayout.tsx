import { Outlet, useParams, Link } from 'react-router-dom';
import styles from './lessonsLayout.module.scss';
import Breadcrumbs from "./ui/breadcrumbs/breadcrumbs";

export default function LessonsLayout() {
    const { category, slug } = useParams();
    const crumbs = [{ label: 'Уроки', to: '/lessons' }];

    if (category) {
        crumbs.push({ label: decodeURIComponent(category), to: `/lessons/${category}` });
    }

    if (slug) {
        crumbs.push({ label: decodeURIComponent(slug.replace(/-/g, ' ')), to: '' });
    }

    return (
        <div className="container">
            <Breadcrumbs/>
            <Outlet />
        </div>
    );
}
