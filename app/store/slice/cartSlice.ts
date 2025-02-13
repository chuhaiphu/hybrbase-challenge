import { createSlice } from '@reduxjs/toolkit'

interface CartState {
  itemCount: number
}

const initialState: CartState = {
  itemCount: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItemCount: (state, action) => {
      state.itemCount = action.payload
    },
    incrementItemCount: (state) => {
      state.itemCount += 1
    },
    decrementItemCount: (state) => {
      state.itemCount = Math.max(0, state.itemCount - 1)
    },
    resetItemCount: (state) => {
      state.itemCount = 0
    }
  }
})

export const { setItemCount, incrementItemCount, decrementItemCount, resetItemCount } = cartSlice.actions
export default cartSlice.reducer
