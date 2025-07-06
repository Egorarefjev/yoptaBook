export interface UseTranslatorResult {
    word: string;
    setWord: (value: string) => void;
    language: string;
    setLanguage: (value: string) => void;
    translations: string[];
    loading: boolean;
    translate: () => Promise<void>;
    saveWord: () => void;
}
