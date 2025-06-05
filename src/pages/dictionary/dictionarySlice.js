import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    words: [],
};

const dictionarySlice = createSlice({
    name: 'dictionary',
    initialState,
    reducers: {
        addWord: (state, action) => {
            const newWord = {
                ...action.payload,
                id: crypto.randomUUID(),
            };

            state.words.push(newWord);
        },
        removeWord: (state, action) => {
            state.words = state.words.filter((word) => word.id !== action.payload);
        },
    },
});

export const { addWord, removeWord } = dictionarySlice.actions;
export default dictionarySlice.reducer;
