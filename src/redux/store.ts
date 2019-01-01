import {createStore} from "redux"
import { globalReducer } from "./reducers";
import { initialState } from "./initialState";

export const store = createStore(globalReducer, initialState)