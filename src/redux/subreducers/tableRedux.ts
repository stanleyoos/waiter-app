// selectors 

import { TableInterface } from "../initialState"

// actions
const createActionName = (actionName: String): String => `app/tables/${actionName}`

// action creators

const tableReducer = (statePart: TableInterface[] = [], action: any) => {
    switch(action.type){
        default:
            return statePart
    }
}

export default tableReducer