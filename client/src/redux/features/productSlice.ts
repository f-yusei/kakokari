import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
    value: {
        seller?: string;
        title?: string;
        grade?: number;
        department?: string;
        subject?: string;
        year?: number;
        semester?: string;
        description?: string;
        createdAt?: Date;
        updatedAt?: Date;
    };
}

const initialState: ProductState = { value: {} };

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct: (state, action: PayloadAction<object>) => {
            state.value = action.payload;
        }
    }
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;