import { apiRequest } from './index.js';
import { API_ENDPOINTS } from "./endpoints.js";

export function apiGetLessons() {
    return apiRequest(API_ENDPOINTS.LESSONS, 'GET');
}

export function apiGetLessonsByCategory(category) {
    return apiRequest(`${API_ENDPOINTS.LESSONS}/by-category/${encodeURIComponent(category)}`, 'GET');
}

export function apiGetLesson(slug) {
    return apiRequest(`${API_ENDPOINTS.LESSONS}/${encodeURIComponent(slug)}`, 'GET');
}
