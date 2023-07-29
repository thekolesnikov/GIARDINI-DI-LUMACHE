import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];

// export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
//     const response = await fetch(
//         'https://64c0ffa1fa35860bae9fc1d2.mockapi.io/items'
//     );
//     const data = await response.json();
//     return data;
// });

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
                });
            }
        },
        // deleteTransaction(state, action) {
        //     return state.filter(
        //         (transaction) => transaction.id !== action.payload
        //     );
        // },
    },
    // extraReducers: {
    //     [fetchItems.fulfilled]: (state, action) => {
    //         state.push(...action.payload);
    //     },
    // },
});

export default itemsSlice.reducer;
export const { addToCart } = itemsSlice.actions;
