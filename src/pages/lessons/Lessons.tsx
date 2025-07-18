import { LESSON_CATEGORIES } from '../../constants/lessonCategories';

export default function Lessons() {
    return  <div className='container'>
        <div className="title title--h2 mb-md">Уроки</div>
        {LESSON_CATEGORIES.map((category) => {
            return  <div key={category.slug}>
                {category.title}
            </div>
        })}
    </div>
}