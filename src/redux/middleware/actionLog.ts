import { Middleware } from "redux"
export const actionLog: Middleware = (store) => (next) => (action) => {
    console.log('当前state: ', store.getState())
    console.log('action: ',action)
    next(action)
    console.log('新的state: ', store.getState())
}