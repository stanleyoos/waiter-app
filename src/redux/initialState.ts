export interface TableInterface {
    id: String,
    status: String,
    peopleAmount: Number,
    maxPeopleAmount: Number,
    bill: Number
}

const initialState:{tables: TableInterface[], tableStatus: String[]} = {
    tables: [],
    tableStatus: []
}

export default initialState