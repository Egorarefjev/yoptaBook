export interface Word {
    id: number;
    word: string;
    translation: string;
    description?: string | null;
    tags?: string[] | null;
}

export interface AddWordInput {
    word: string;
    translation: string;
    description?: string;
    tags?: string[];
}
