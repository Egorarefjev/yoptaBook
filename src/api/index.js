const API_URL = import.meta.env.VITE_API_URL;
import { getToken } from '../services/authService.js';

export async function apiRequest(endpoint, method = 'GET', body) {
    const headers = { 'Content-Type': 'application/json' };
    const token = getToken();

    if (token) headers['Authorization'] = `Bearer ${token}`;

    const options = {
        method,
        headers,
        credentials: 'include',
    };

    if (body) {
       options.body = JSON.stringify(body);
    }

    const response = await fetch(`${API_URL}${endpoint}`, options);

    if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}));
        const errorMessage = errorBody?.message || 'Ошибка: ' + response.status;
        throw new Error(errorMessage);
    }

    return response.json();
}