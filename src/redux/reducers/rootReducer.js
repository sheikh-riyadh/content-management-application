import { combineReducers } from "redux"
import { postsReducer } from "./postReducer"
import { filterReducer } from "./filterReducer"

export const rootReducer = combineReducers({
    posts: postsReducer,
    filter: filterReducer
})