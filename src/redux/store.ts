import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
// import { actionLog } from "./middleware/actionLog";
import { changeLanguage } from "./middleware/changeLanguage";
import { productDetailSlice } from './productDetail/slice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productSearchSlice } from "./productSearch/slice";
const rootReducer = combineReducers({
    language: languageReducer, 
    recommendProducts: recommendProductsReducer,
    productDetail: productDetailSlice.reducer,
    productSearch: productSearchSlice.reducer
})
// const store = createStore(rootReducer, applyMiddleware(thunk, /*actionLog, */ changeLanguage))
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(changeLanguage),
    devTools: true,
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store