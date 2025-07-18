import Login from '../pages/login/Login';
import DictionaryPage from '../pages/dictionary/DictionaryPage';
import About from "../pages/about/About.js";
import Translator from "../pages/translator/Translator";
import Lessons from '../pages/lessons/Lessons';

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
                <Lessons />
            </PrivateRoute>
        ),
    },
];
