export interface UseTranslatorResult {
    translation: string;
    loading: boolean;
    translate: (word: string, from: string, to: string) => Promise<void>;
}
