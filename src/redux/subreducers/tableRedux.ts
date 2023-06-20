import { TableInterface } from "../initialState"
import { API_URL } from "../../config"

// selectors
export const getAllTables = (state: any) => state.tables
export const getSingleTable = (state: any, id: string | undefined) =>
  state.tables.find((table: any) => table.id === id)

// actions
const createActionName = (actionName: String): String =>
  `app/tables/${actionName}`
const UPDATE_TABLES = createActionName("UPDATE_TABLES")

// action creators
export const updateTables = (payload: any) => ({ type: UPDATE_TABLES, payload })

export const fetchTables = () => {
  return (dispatch: any) => {
    fetch(`${API_URL}/tables`)
      .then((res) => res.json())
      .then((tables) => dispatch(updateTables(tables)))
  }
}

export const updateTableRequest = (table: any) => {
  return (dispatch: any) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(table),
    }
    fetch(`${API_URL}/tables/${table.id}`, options).then(() =>
      dispatch(fetchTables())
    )
  }
}

export const deleteTableRequest = (id: any) => {
  return (dispatch: any) => {
    const options = {
      method: "DELETE",
    }
    fetch(`${API_URL}/tables/${id}`, options).then(() =>
      dispatch(fetchTables())
    )
  }
}

export const addTableRequest = (table: TableInterface) => {
  return (dispatch: any) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(table),
    }
    fetch(`${API_URL}/tables`, options).then(() => dispatch(fetchTables()))
  }
}

const tableReducer = (statePart: TableInterface[] = [], action: any) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload]

    default:
      return statePart
  }
}

export default tableReducer
