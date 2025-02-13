import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
  isLoggedIn: boolean
  user: any | null
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLoggedIn = true
      state.user = action.payload.user
    },
    setLoggedOut: (state) => {
      state.isLoggedIn = false
      state.user = null
    },
  },
})

export const { setLoggedIn, setLoggedOut } = authSlice.actions
export default authSlice.reducer
