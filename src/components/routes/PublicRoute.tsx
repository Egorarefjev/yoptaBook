import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ROUTES } from '../../routes/constants';

export default function PublicRoute({ children }) {
    const { isAuth, loading } = useAuth();

    if (loading) return null;

    return !isAuth ? children : <Navigate to={ROUTES.DICTIONARY} replace />;
}
