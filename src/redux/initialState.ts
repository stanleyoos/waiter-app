export interface TableInterface {
  id: String
  status: String
  peopleAmount: Number
  maxPeopleAmount: Number
  bill: Number
}

const initialState: { tables: TableInterface[]; tableStatuses: String[] } = {
  tables: [],
  tableStatuses: [],
}

export default initialState
