import Login from '../pages/login/Login';
import DictionaryPage from '../pages/dictionary/DictionaryPage';
import Result from '../pages/Result';
import About from "../pages/about/About.js";

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
        path: ROUTES.RESULT,
        element: (
            <PrivateRoute>
                <Result />
            </PrivateRoute>
        ),
    },
];
