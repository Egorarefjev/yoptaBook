import { LESSON_CATEGORIES } from '../../constants/lessonCategories';
import { useNavigate } from 'react-router-dom';

export default function Lessons() {

    const navigate = useNavigate();

    const openCategory = (categorySlug) => {
        navigate(`/lessons/${categorySlug}`);
    };

    return  <div className='container'>
        <div className="title title--h2 mb-md">Уроки</div>
        {LESSON_CATEGORIES.map((category) => {
            return  <div key={category.slug} onClick={() => openCategory(category.slug)}>
                {category.title}
            </div>
        })}
    </div>
}