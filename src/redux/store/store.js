import { configureStore } from '@reduxjs/toolkit';
import itemsSlice from '../slices/itemsSlice';
import cartActiveSlice from '../slices/cartActiveSlice';

export const store = configureStore({
    reducer: {
        items: itemsSlice,
        cartActive: cartActiveSlice,
    },
});
