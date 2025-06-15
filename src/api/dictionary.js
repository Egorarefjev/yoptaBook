import { apiRequest } from './index.js';
import { API_ENDPOINTS } from "./endpoints.js";

export function apiCreateWord(word, translation, description) {
    return apiRequest(API_ENDPOINTS.WORDS, 'POST', { word, translation, description });
}

export function apiDeleteWord(id) {
    return apiRequest(`${API_ENDPOINTS.WORDS}/${id}`, 'DELETE');
}

export function apiGetWords() {
    return apiRequest(API_ENDPOINTS.WORDS, 'GET');
}
