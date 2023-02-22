import axios from "axios"
import { ThunkAction } from "redux-thunk/es/types"
import { RootState } from "../store"
export const FETCH_RECOMMEND_PRODUCTS_START = 'fetch_recommend_products_start'
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS = 'fetch_recommend_products_success'
export const FETCH_RECOMMEND_PRODUCTS_FAIL = 'fetch_recommend_products_fail'
interface FetchRecommendProductStartAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_START
}
interface FetchRecommendProductSuccessAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS;
    payload: any
}
interface FetchRecommendProductFailAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_FAIL;
    payload: any
}
export type RecommendProductAction = FetchRecommendProductStartAction | FetchRecommendProductSuccessAction | FetchRecommendProductFailAction
export const fetchRecommendProductStartActionCreator = (): FetchRecommendProductStartAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCTS_START
    }
}
export const fetchRecommendProductSuccessActionCreator = (data): FetchRecommendProductSuccessAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
        payload: data
    }
}
export const fetchRecommendProductFailActionCreator = (error): FetchRecommendProductFailAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCTS_FAIL,
        payload: error
    }
}
export const giveMeDataActionCreator = ():ThunkAction<void, RootState, unknown, RecommendProductAction> => async (dispatch, getstate) => {
    dispatch(fetchRecommendProductStartActionCreator())
    try {
        const { data } = await axios.get('http://123.56.149.216:8080/api/productCollections')
        dispatch(fetchRecommendProductSuccessActionCreator(data))
    } catch (error) {
        if (error instanceof Error) {
            dispatch(fetchRecommendProductFailActionCreator(error.message))
        }
    }
}