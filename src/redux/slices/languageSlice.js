import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    language: 'ENG',
};

export const languageSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        setLanguage(state, action) {
            state.language = action.payload;
        },
    },
});

export default languageSlice.reducer;
export const { setLanguage } = languageSlice.actions;
