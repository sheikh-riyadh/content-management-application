import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";

/* Store created here */
export const store = createStore(rootReducer, applyMiddleware(thunk))