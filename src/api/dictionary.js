import { apiRequest } from './index.js';
import { API_ENDPOINTS } from "./endpoints.js";
import { buildQuery } from "../utils/buildQuery.js";

/**
 * POST /api/cards
 * Создать карточку (private) + перевод
 */
export function apiCreateCard(data) {
    return apiRequest(API_ENDPOINTS.CARDS, 'POST', data);
}

/**
 * GET /api/cards
 * filters: { archived?: boolean, tag?: string, q?: string }
 * бек: archived=1|0, tag, q
 */
export function apiGetCards(filters = {}) {
    const queryString = buildQuery(
        buildCardsQueryParams(filters)
    );

    return apiRequest(
        `${API_ENDPOINTS.CARDS}${queryString}`,
        "GET"
    );
}

/**
 * GET /api/cards/:id
 */
export function apiGetCard(id) {
    return apiRequest(`${API_ENDPOINTS.CARDS}/${id}`, 'GET');
}

/**
 * PATCH /api/cards/:id
 * (только private)
 */
export function apiUpdateCard(id, data) {
    return apiRequest(`${API_ENDPOINTS.CARDS}/${id}`, 'PATCH', data);
}

/**
 * DELETE /api/cards/:id
 */
export function apiDeleteCard(id) {
    return apiRequest(`${API_ENDPOINTS.CARDS}/${id}`, 'DELETE');
}

/**
 * POST /api/cards/:id/archive
 */
export function apiArchiveCard(id) {
    return apiRequest(`${API_ENDPOINTS.CARDS}/${id}/archive`, 'POST');
}

/**
 * POST /api/cards/:id/unarchive
 */
export function apiUnarchiveCard(id) {
    return apiRequest(`${API_ENDPOINTS.CARDS}/${id}/unarchive`, 'POST');
}

/**
 * POST /api/cards/:id/publish
 */
export function apiPublishCard(id) {
    return apiRequest(`${API_ENDPOINTS.CARDS}/${id}/publish`, 'POST');
}

/**
 * POST /api/cards/:id/unpublish
 */
export function apiUnpublishCard(id) {
    return apiRequest(`${API_ENDPOINTS.CARDS}/${id}/unpublish`, 'POST');
}

/**
 * POST /api/cards/:id/like
 */
export function apiLikeCard(id) {
    return apiRequest(`${API_ENDPOINTS.CARDS}/${id}/like`, 'POST');
}

/**
 * DELETE /api/cards/:id/like
 */
export function apiUnlikeCard(id) {
    return apiRequest(`${API_ENDPOINTS.CARDS}/${id}/like`, 'DELETE');
}

/**
 * POST /api/cards/:id/tags
 * body: { tags: string[] }
 * На беке это replace (полная замена)
 */
export function apiReplaceCardTags(id, tags) {
    return apiRequest(`${API_ENDPOINTS.CARDS}/${id}/tags`, 'POST', { tags });
}

function buildCardsQueryParams(filters) {
    const params = {};

    if (filters.archived === true) params.archived = "1";
    if (filters.archived === false) params.archived = "0";
    if (filters.tag) params.tag = filters.tag;
    if (filters.search) params.search = filters.search;

    return params;
}