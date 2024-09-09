import { createSlice } from '@reduxjs/toolkit'

export const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        selectedCategory: "All"
    },
    reducers: {
        filterCategories: (state, action) => {
            state.selectedCategory = action.payload
        }
},
})



export const getSelectedCategory = state => state.shop.selectedCategory;
export const { filterCategories } = shopSlice.actions;

export default shopSlice.reducer