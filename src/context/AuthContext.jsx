import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginRequest, registerRequest, getCurrentUser } from '../api/auth';
import { ROUTES } from '../routes/constants';

const TOKEN_KEY = 'auth_token';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const saveToken = (token) => localStorage.setItem(TOKEN_KEY, token);
    const getToken = () => localStorage.getItem(TOKEN_KEY);
    const removeToken = () => localStorage.removeItem(TOKEN_KEY);

    async function login(login, password) {
        const res = await loginRequest(login, password);
        saveToken(res.token);
        setUser(res.user);
        navigate(ROUTES.DICTIONARY);
    }

    async function register(login, password) {
        const res = await registerRequest(login, password);
        saveToken(res.token);
        setUser(res.user);
        navigate(ROUTES.DICTIONARY);
    }

    function logout() {
        removeToken();
        setUser(null);
        navigate(ROUTES.LOGIN);
    }

    async function checkAuth() {
        try {
            const res = await getCurrentUser();
            setUser(res.user);
        } catch {
            removeToken();
            setUser(null);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (getToken()) {
            void checkAuth();
        } else {
            setLoading(false);
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                token: getToken(),
                isAuth: !!user,
                loading,
                login,
                register,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
