import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    toggle: false,
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
        }
    }
})

export const { setModal, setToggle } = productModalSlice.actions
export default productModalSlice.reducer