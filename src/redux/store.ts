import {createStore} from "redux"
import { globalReducer } from "./reducers";
import { initialState } from "./initialState";

// @ts-ignore
export const store = createStore(globalReducer, initialState/*, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/)