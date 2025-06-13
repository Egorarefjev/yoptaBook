import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginRequest, registerRequest, getCurrentUser } from '../api/auth';
import { ROUTES } from "../routes/constants.js";

const TOKEN_KEY = 'auth_token';

function saveToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
}

function getToken() {
    return localStorage.getItem(TOKEN_KEY);
}

function removeToken() {
    localStorage.removeItem(TOKEN_KEY);
}

export default function useAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    async function login(login, password) {
        const res = await loginRequest(login, password);
        saveToken(res.token);
        setUser(res.user);
        navigate(ROUTES.DICTIONARY); // 👉 переадресация после логина
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
            const user = await getCurrentUser();
            setUser(user.user);
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

    return {
        user,
        isAuth: !!user,
        loading,
        login,
        register,
        logout,
    };
}
