import { configureStore } from '@reduxjs/toolkit';
import dictionaryReducer from '../pages/Dictionary/dictionarySlice';

export const store = configureStore({
    reducer: {
        dictionary: dictionaryReducer,
    },
});
