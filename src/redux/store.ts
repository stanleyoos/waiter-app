import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import initialState from "./initialState";
import tableReducer from "./subreducers/tableRedux";

const subreducers = {
    tables: tableReducer
}

const reducer = combineReducers(subreducers)

  

const store = createStore(reducer, initialState, composeWithDevTools(
    applyMiddleware(thunk)
))

export default store