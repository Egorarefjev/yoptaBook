export interface Word {
    id: number;
    word: string;
    translation: string;
    description?: string | null;
    tags?: string[] | null;
    is_archived?: boolean;
}

export interface AddWordInput {
    word: string;
    translation: string;
    description?: string;
    tags?: string[];
    is_archived?: boolean;
}

export type UpdateWordInput = {
    word?: string;
    translation?: string;
    description?: string | null;
    tags?: string[];
    is_archived?: boolean;
};
