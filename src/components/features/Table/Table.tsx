import { TableInterface } from "../../../redux/initialState"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FaTrash } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { deleteTableRequest } from "../../../redux/subreducers/tableRedux"
import styles from "./Table.module.scss"
import clsx from "clsx"

const Table = ({ id, status }: TableInterface) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteTableRequest(id))
  }

  return (
    <Card className="my-4 p-4">
      <Card.Body className="d-block d-sm-flex justify-content-between align-items-center">
        <div className="d-block d-sm-flex">
          <Card.Title className="me-sm-4 mb-3 mb-sm-0">Table {id}</Card.Title>
          <p className=" mb-4 mb-sm-0">
            <strong>Status: </strong> {status}
          </p>
        </div>

        <div>
          <Link to={`/table/${id}`}>
            <Button variant="light">Show more</Button>
          </Link>
          <FaTrash
            onClick={handleDelete}
            className={clsx("ms-3", styles.trash)}
          />
        </div>
      </Card.Body>
    </Card>
  )
}

export default Table
