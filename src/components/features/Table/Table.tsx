import { TableInterface } from "../../../redux/initialState"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const Table = ({ id, status }: TableInterface) => {
  return (
    <Card className="my-4 p-4">
      <Card.Body className="d-block d-sm-flex justify-content-between align-items-center">
        <div className="d-block d-sm-flex">
          <Card.Title className="me-sm-4 mb-3 mb-sm-0">Table {id}</Card.Title>
          <p className=" mb-4 mb-sm-0">
            <strong>Status: </strong> {status}
          </p>
        </div>

        <Link to={`/table/${id}`}>
          <Button variant="light">Show more</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Table
