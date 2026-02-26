export interface UseTranslatorResult {
    translation: string;
    loading: boolean;
    translate: () => Promise<void>;
}
