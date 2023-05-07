import { createSlice } from '@reduxjs/toolkit'

export const authState = {
    token: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState: authState,
    reducers: {
        setActAuth: (state, action) => {
            return { ...state, ...action.payload }
        }
    }
})

export const { setActAuth } = authSlice.actions