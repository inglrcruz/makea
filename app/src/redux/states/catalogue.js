import { createSlice } from '@reduxjs/toolkit'

export const catalogueState = {
    categories: null,
    articles: null,
    article: null
}

export const catalogueSlice = createSlice({
    name: "catalogue",
    initialState: catalogueState,
    reducers: {
        setActCatalogue: (state, action) => {
            return { ...state, ...action.payload }
        }
    }
})

export const { setActCatalogue, setActCatalogueReset } = catalogueSlice.actions