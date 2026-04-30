import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {
       addToCart: (state, action) => {
       const item = state.find((item) => item.id ===  action.payload.id)
        if(!item) {
            state.push(action.payload)
        }else {
            item.quantity += 1;
        }
       },
       removeItem:(state,action) => {
        return state.filter((item) => item.id !== action.payload.id);
       }
    }
})

export const {addToCart,removeItem} = cartSlice.actions;
export default cartSlice.reducer;