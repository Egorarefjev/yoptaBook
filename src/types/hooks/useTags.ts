export interface UseTagsResult {
    tags: string[];
    loadingTags: boolean;
    errorTags: string | null;
    fetchTags: (isArchive: boolean) => Promise<void>;
}
