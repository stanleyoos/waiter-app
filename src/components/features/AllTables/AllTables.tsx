import { useSelector } from "react-redux"
import { getAllTables } from "../../../redux/subreducers/tableRedux"
import Table from "../Table/Table"
import { Spinner } from "react-bootstrap"

const AllTables = () => {
  const tables = useSelector(getAllTables)

  if (tables.length === 0) {
    return (
      <div className="text-center">
        <Spinner
          style={{
            height: "100px",
            width: "100px",
          }}
          animation="border"
          role="status"
        >
          <span className="visually-hidden text-center">Loading...</span>
        </Spinner>
      </div>
    )
  }
  return (
    <>
      {tables.map((table: any) => (
        <Table key={table.id} {...table} />
      ))}
    </>
  )
}

export default AllTables
