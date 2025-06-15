import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ROUTES } from '../../routes/constants'


export default function PrivateRoute({ children }) {
    const { isAuth, loading } = useAuth();

    if (loading) return null; // Можно вставить спиннер

    return isAuth ? children : <Navigate to={ROUTES.LOGIN} replace />;
}
