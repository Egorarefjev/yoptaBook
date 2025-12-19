import {Word, AddWordInput, UpdateWordInput} from "../words";

export interface UseDictionaryResult {
    words: Word[];
    loadingWords: boolean;
    errorWords: string | null;
    fetchWords: (tag?: string, isShowArchive?: boolean) => Promise<void>;
    addWord: (input: AddWordInput) => Promise<void>;
    deleteWord: (id: number) => Promise<void>;
    updateWord: (id: number, data:UpdateWordInput) => Promise<void>;
}