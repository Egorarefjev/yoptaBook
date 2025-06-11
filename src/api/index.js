const API_URL = import.meta.env.VITE_API_URL;

export async function apiRequest(endpoint, method = 'GET', body) {
    const options = {
        method,
        headers: { 'Content-Type': 'application/json' },
    };

    if (body) {
       options.body = JSON.stringify(body);
    }

    const response = await fetch(`${API_URL}${endpoint}`, options);
    if (!response.ok) {
        throw new Error('Ошибка: ' + response.status);
    }

    return response.json();
}