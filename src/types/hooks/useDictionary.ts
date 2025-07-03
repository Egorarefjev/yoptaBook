import { Word, AddWordInput } from "../words";

export interface UseDictionaryResult {
    words: Word[];
    loadingWords: boolean;
    errorWords: string | null;
    fetchWords: (tag?: string) => Promise<void>;
    addWord: (input: AddWordInput) => Promise<void>;
    deleteWord: (id: number) => Promise<void>;
}