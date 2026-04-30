import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import todoReducer from '../features/todo/todoSlice'
import productReducer from '../features/product/productSlice'
import cartReducer from '../features/cart/cartSlice'

export const store = configureStore({
    reducer: {
        counter:counterReducer,
        todo:todoReducer,
        product:productReducer,
        cart:cartReducer,
    }
})