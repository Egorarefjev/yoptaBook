import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
    apiUpdateCard,
    apiArchiveCard,
    apiUnarchiveCard,
    apiPublishCard,
    apiUnpublishCard,
} from "../api/dictionary";

export function useCardActions(cardId: number) {
    const queryClient = useQueryClient();

    function refresh() {
        queryClient.invalidateQueries({ queryKey: ["card", cardId] });
        queryClient.invalidateQueries({ queryKey: ["cards"] });
    }

    const update = useMutation({
        mutationFn: (data: any) => apiUpdateCard(cardId, data),
        onSuccess: refresh,
    });

    const archive = useMutation({
        mutationFn: () => apiArchiveCard(cardId),
        onSuccess: refresh,
    });

    const unarchive = useMutation({
        mutationFn: () => apiUnarchiveCard(cardId),
        onSuccess: refresh,
    });

    const publish = useMutation({
        mutationFn: () => apiPublishCard(cardId),
        onSuccess: refresh,
    });

    const unpublish = useMutation({
        mutationFn: () => apiUnpublishCard(cardId),
        onSuccess: refresh,
    });

    return {
        update,
        archive,
        unarchive,
        publish,
        unpublish,
    };
}