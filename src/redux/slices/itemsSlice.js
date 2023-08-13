import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addToCart(state, action) {
            if (state.find((item) => item.id === action.payload.id)) {
                const existItem = state.find(
                    (item) => item.id === action.payload.id
                );
                existItem.count += action.payload.count;
            } else {
                state.push({
                    name: action.payload.name,
                    count: action.payload.count,
                    img: action.payload.img,
                    id: action.payload.id,
                    price: action.payload.price,
                });
            }
        },
        deleteFromCart(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
        incrementCount(state, action) {
            const item = state.find((item) => item.id === action.payload.id);
            item.count++;
        },
        decrementCount(state, action) {
            const item = state.find((item) => item.id === action.payload.id);
            if (item.count > 1) {
                item.count--;
            }
        },
    },
    // extraReducers: {
    //     [fetchItems.fulfilled]: (state, action) => {
    //         state.push(...action.payload);
    //     },
    // },
});

export default itemsSlice.reducer;
export const { addToCart, deleteFromCart, incrementCount, decrementCount } =
    itemsSlice.actions;
