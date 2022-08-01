import { configureStore} from "@reduxjs/toolkit";
import productModalReducer from './features/productModalSlice'
import cartReducer from './features/cartSlice'

export const store = configureStore({
    reducer: {
        productModal: productModalReducer,
        cart: cartReducer
    }
})