import { createSlice } from '@reduxjs/toolkit'

export const globalState = {
    loading: false,
    error: false,
    notFound: null
}

export const globalSlice = createSlice({
    name: "global",
    initialState: globalState,
    reducers: {
        setActGlobal: (state, action) => {
            return { ...state, ...action.payload }
        }
    }
})

export const { setActGlobal } = globalSlice.actions