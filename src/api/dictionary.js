import { apiRequest } from './index.js';
import { API_ENDPOINTS } from "./endpoints.js";

export function apiCreateWord(word, translation, description, tags) {
    return apiRequest(API_ENDPOINTS.WORDS, 'POST', { word, translation, description, tags });
}

export function apiGetWordsByTag(tag) {
    return apiRequest(`${API_ENDPOINTS.WORDS}/by-tag/${encodeURIComponent(tag)}`, 'GET');
}

export function apiGetTags(isArchived=false) {
    return apiRequest(        `${API_ENDPOINTS.WORDS_TAGS}?archived=${isArchived}`,'GET');
}
export function apiDeleteWord(id) {
    return apiRequest(`${API_ENDPOINTS.WORDS}/${id}`, 'DELETE');
}

export function apiGetWords() {
    return apiRequest(API_ENDPOINTS.WORDS, 'GET');
}

export function apiGetArchiveWords() {
    return apiRequest(`${API_ENDPOINTS.WORDS}?archived=true`, 'GET');
}

export function apiUpdateWord(id, data) {
    return apiRequest(`${API_ENDPOINTS.WORDS}/${id}`, 'PATCH', data);
}
