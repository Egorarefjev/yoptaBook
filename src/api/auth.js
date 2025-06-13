import { apiRequest } from './index.js';
import { API_ENDPOINTS } from "./endpoints.js";

export function loginRequest(login, password) {
    return apiRequest(API_ENDPOINTS.LOGIN, 'POST', { login, password });
}

export function registerRequest(login, password) {
    return apiRequest(API_ENDPOINTS.REGISTER, 'POST', { login, password });
}

export function getCurrentUser() {
    return apiRequest(API_ENDPOINTS.ME);
}
