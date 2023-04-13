import { createStore, applyMiddleware } from "redux";
import { postsReducer } from "./reducers/postReducer";
import thunk from "redux-thunk";

/* Store created here */
export const store = createStore(postsReducer, applyMiddleware(thunk))