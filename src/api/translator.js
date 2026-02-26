import { apiRequest } from './index.js';
import { API_ENDPOINTS } from "./endpoints.js";

export async function getTranslation(word, from = 'ru', to = 'en') {
    return apiRequest(API_ENDPOINTS.TRANSLATE, 'POST', {
        word,
        from,
        to
    });
}

export async function getEnrich(word, from = 'ru', to = 'en') {
    return apiRequest(API_ENDPOINTS.ENRICH, 'POST', {
        word,
        from,
        to
    });
}
