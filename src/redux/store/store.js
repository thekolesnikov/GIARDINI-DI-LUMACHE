import { configureStore } from '@reduxjs/toolkit';
import itemsSlice from '../slices/itemsSlice';
import languageSlice from '../slices/languageSlice';

export const store = configureStore({
    reducer: {
        items: itemsSlice,
        language: languageSlice,
    },
});
