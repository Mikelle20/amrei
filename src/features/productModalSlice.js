import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    toggle: false,
    accessed: false,
    product: {

    }
}

const productModalSlice = createSlice({
    name: 'productModal',
    initialState,
    reducers: {
        setModal: (state, { payload }) => {
            state.product = payload
        },
        setToggle: (state, { payload }) => {
            state.toggle = payload
        },
        setAccessed: (state) => {
            state.accessed = !state.accessed
        }
    }
})

export const { setModal, setToggle, setAccessed } = productModalSlice.actions
export default productModalSlice.reducer