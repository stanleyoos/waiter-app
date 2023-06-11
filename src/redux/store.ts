import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import initialState from "./initialState";
import tableReducer from "./subreducers/tableRedux";
import tableStatusesReducer from "./subreducers/tableStatusRedux";

const subreducers = {
    tables: tableReducer,
    tableStatuses: tableStatusesReducer
}

const reducer = combineReducers(subreducers)

  

const store = createStore(reducer, initialState, composeWithDevTools(
    applyMiddleware(thunk)
))

export default store