import { useQuery } from "@tanstack/react-query";
import { apiGetCards } from "../api/dictionary";

export interface CardsFilters {
    archived?: boolean;
    tag?: string;
    search?: string;
}

export function useCards(filters: CardsFilters) {
    return useQuery({
        queryKey: ["cards", filters],
        queryFn: () => apiGetCards(filters),
    });
}