// selectors 
export const getAllTableStatuses = (state:any) => state.tableStatuses



// actions
const createActionName = (actionName: String): String => `app/tableStatuses/${actionName}`
const UPDATE_TABLESTATUSES = createActionName('UPDATE_TABLESTATUSES')


// action creators
export const updateTableStatuses = (payload:any) => ({
    type: UPDATE_TABLESTATUSES, payload
})
export const fetchTableStatuses = () => {
    return (dispatch:any) => {
        fetch('http://localhost:3131/api/tableStatuses')
        .then(res => res.json())
        .then(tableStatuses => dispatch(updateTableStatuses(tableStatuses)))
    }
}


const tableStatusesReducer = (statePart: String[] = [], action:any) => {
    switch(action.type) {

        case UPDATE_TABLESTATUSES:
            return [...action.payload]

        default:
            return statePart
    }
}

export default tableStatusesReducer