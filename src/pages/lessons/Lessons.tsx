import { LESSON_CATEGORIES } from '../../constants/lessonCategories';
import { useNavigate } from 'react-router-dom';
import CategoryCard from "../../components/lessons/CategoryCard";
import styles from './lessons.module.scss';

export default function Lessons() {

    const navigate = useNavigate();

    const openCategory = (categorySlug) => {
        navigate(`/lessons/${categorySlug}`);
    };

    return  <div className='container'>
        <div className="title title--h2 mb-md">Уроки</div>
        <div className={styles.contentGrid}>
            {LESSON_CATEGORIES.map((category) => {
                return  <CategoryCard
                    key={category.slug}
                    title={category.title}
                    onClickAction={() => openCategory(category.slug)}/>
            })}
        </div>
    </div>
}