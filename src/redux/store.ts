import { createStore, combineReducers, applyMiddleware } from "redux";
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
import thunk from "redux-thunk";
// import { actionLog } from "./middleware/actionLog";
import { changeLanguage } from "./middleware/changeLanguage";
const rootReducer = combineReducers({
    language: languageReducer, 
    recommendProducts: recommendProductsReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk, /*actionLog, */ changeLanguage))
export type RootState = ReturnType<typeof store.getState>
export default store