import styles from './CategoryCard.module.scss';
import { useNavigate } from 'react-router-dom';

interface Props {
    title: string;
    onClickAction: () => void;
}

export default function CategoryCard({ title, onClickAction }: Props) {
    const navigate = useNavigate();

    return (
            <div className={styles.card} onClick={onClickAction}>
            <div className={styles.title}>{title}</div>
        </div>
    );
}

