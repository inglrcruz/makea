import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import { authSlice } from './states/auth'
import { catalogueSlice } from './states/catalogue'
import { globalSlice } from './states/global'

const persistConfig = {
    key: "makeaRoot",
    version: 1,
    storage: AsyncStorage,
    // if you do not want to persist this part of the state
    blacklist: ['auth', 'catalogue']
}

const reducer = combineReducers({
    auth: authSlice.reducer,
    catalogue: catalogueSlice.reducer,
    global: globalSlice.reducer
})

// this ensures your redux state is saved to persisted storage whenever it changes
// we pass this to the store
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export const persistor = persistStore(store)