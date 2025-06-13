const API_URL = import.meta.env.VITE_API_URL;
import { getToken } from '../services/authService.js';

export async function apiRequest(endpoint, method = 'GET', body) {
    const headers = { 'Content-Type': 'application/json' };
    const token = getToken();

    if (token) headers['Authorization'] = `Bearer ${token}`;

    const options = {
        method,
        headers,
    };

    if (body) {
       options.body = JSON.stringify(body);
    }

    const response = await fetch(`${API_URL}${endpoint}`, options);
    if (!response.ok) throw new Error('Ошибка: ' + response.status);

    return response.json();
}