import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
// import { actionLog } from "./middleware/actionLog";
import { changeLanguage } from "./middleware/changeLanguage";
import { productDetailSlice } from './productDetail/slice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productSearchSlice } from "./productSearch/slice";
import { UserSlice } from "./user/slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}
const rootReducer = combineReducers({
    language: languageReducer, 
    recommendProducts: recommendProductsReducer,
    productDetail: productDetailSlice.reducer,
    productSearch: productSearchSlice.reducer,
    user: UserSlice.reducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
// const store = createStore(rootReducer, applyMiddleware(thunk, /*actionLog, */ changeLanguage))
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(changeLanguage),
    devTools: true,
})
const persistedStore = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default { store, persistedStore }