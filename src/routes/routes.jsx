import Login from '../pages/login/login';
import DictionaryPage from '../pages/dictionary/DictionaryPage';
import About from "../pages/about/About.js";
import Translator from "../pages/translator/Translator";
import Lessons from '../pages/lessons/Lessons';
import LessonCategory from "../pages/lessons/LessonCategory.js";
import LessonPage from "../pages/lessons/LessonPage.js";
import LessonsLayout from '../components/LessonsLayout';
import PrivateRoute from '../components/routes/PrivateRoute';
import PublicRoute from '../components/routes/PublicRoute';
import { ROUTES } from './constants';

export const appRoutes = [
    {
        path: ROUTES.LOGIN,
        element: (
            <PublicRoute>
                <Login />
            </PublicRoute>
        ),
    },
    {
        path: ROUTES.DICTIONARY,
        element: (
            <PrivateRoute>
                <DictionaryPage />
            </PrivateRoute>
        ),
    },
    {
        path: ROUTES.ABOUT,
        element: (
            <PrivateRoute>
                <About />
            </PrivateRoute>
        ),
    },
    {
        path: ROUTES.TRANSLATOR,
        element: (
            <PrivateRoute>
                <Translator />
            </PrivateRoute>
        ),
    },
    {
        path: ROUTES.LESSONS,
        element: (
            <PrivateRoute>
                <LessonsLayout />
            </PrivateRoute>
        ),
        children: [
            {
                index: true,
                element: <Lessons />,
            },
            {
                path: ':category',
                element: <LessonCategory />,
            },
            {
                path: ':category/:slug',
                element: <LessonPage />,
            },
        ]
    }
];
