import { apiRequest } from './index.js';

export async function getTranslation(word, from = 'ru', to = 'eng') {
    return apiRequest('/translate', 'POST', {
        word,
        from,
        to
    });
}
