export interface UseTranslatorResult {
    word: string;
    setWord: (value: string) => void;
    language: string;
    setLanguage: (value: string) => void;
    translations: string[];
    translation: string;
    loading: boolean;
    translate: () => Promise<void>;
}
