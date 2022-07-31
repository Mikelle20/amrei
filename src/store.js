import { configureStore} from "@reduxjs/toolkit";
import productModalReducer from './features/productModalSlice'

export const store = configureStore({
    reducer: {
        productModal: productModalReducer
    }
})