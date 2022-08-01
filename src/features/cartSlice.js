import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../DummyData/ProductsData";

const initialState = {
    cartItems: productsData,
    total: 0,
    amount: 0,
    open: false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = productsData
        },
        addItem: (state, { payload }) => {
            const cartItem = state.cartItems.find((item)=> {
                return item.id === payload.id
            })
            cartItem.amount = payload.amount
        },
        removeItem: (state, action) => {
            const itemId = action.payload
            state.cartItems = state.cartItems.filter((item) =>{
                return item.id !== itemId
            })
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item)=> {
                return item.id === payload
            })
            cartItem.amount = cartItem.amount + 1
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item)=> {
                return item.id === payload
            })
            cartItem.amount = cartItem.amount - 1
        },
        calculateTotals: (state) => {
            let amount = 0
            let total = 0
            state.cartItems.forEach((item) => {
                amount += item.amount
                total += item.amount * item.price
            })

            state.amount = amount;
            state.total = total
        },
        openCart: (state, { payload }) => {
            state.open = !state.open
        }
    }
})

export const { clearCart, addItem, removeItem, increase, decrease, calculateTotals, openCart } = cartSlice.actions
export default cartSlice.reducer