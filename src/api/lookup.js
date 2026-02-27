import { apiRequest } from "./index.js";
import { API_ENDPOINTS } from "./endpoints.js";
import { buildQuery } from "../utils/buildQuery.js";

export function apiLookup(from, to, word) {
    const trimmedWord = String(word || "").trim();

    if (!trimmedWord) {
        throw new Error("Word is required");
    }

    const queryString = buildQuery({
        from,
        to,
        word: trimmedWord,
    });

    return apiRequest(
        `${API_ENDPOINTS.LOOKUP}${queryString}`,
        "GET"
    );
}