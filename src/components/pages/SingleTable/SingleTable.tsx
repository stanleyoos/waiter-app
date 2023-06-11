import { useNavigate, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { getSingleTable } from "../../../redux/subreducers/tableRedux"
import { Form, Card, Button } from "react-bootstrap"
import { getAllTableStatuses } from "../../../redux/subreducers/tableStatusRedux"
import { useState } from "react"
import { updateTableRequest } from "../../../redux/subreducers/tableRedux"

const SingleTable = () => {
  const dispatch = useDispatch()

  const { id } = useParams()
  const table = useSelector((state) => getSingleTable(state, id))

  const navigate = useNavigate()
  if (table === undefined) navigate("/")

  const [people, setPeopleAmount] = useState(table.peopleAmount)
  const [maxPeople, setMaxPeopleAmount] = useState(table.maxPeopleAmount)
  const [billValue, setBillValue] = useState(table.bill)
  const [tableStatus, setTableStatus] = useState(table.status)

  const handleTableStatusChange = (e: any) => {
    const tableStatus = e.target.value
    if (tableStatus === "Clening" || "Free") setPeopleAmount(0)
    setTableStatus(tableStatus)
  }

  const handleMaxPeopleAmountChange = (e: any) => {
    const maxValue = e.target.value
    if (people >= maxPeople) setPeopleAmount(maxValue)
    setMaxPeopleAmount(maxValue)
  }

  const handleUpdate = () => {
    dispatch(
      updateTableRequest({
        id: table.id,
        status: tableStatus,
        peopleAmount: people,
        maxPeopleAmount: maxPeople,
        bill: billValue,
      })
    )
    navigate("/")
  }

  const tableStatusesOptions = useSelector(getAllTableStatuses)

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="mb-4">
            <h1>Table {table.id}</h1>
          </Card.Title>

          <div className="d-flex align-items-center">
            <Card.Text className="pt-3 me-2">
              <strong>Status: </strong>
            </Card.Text>
            <Form.Select
              value={tableStatus}
              onChange={(e) => handleTableStatusChange(e)}
              style={{ width: "140px" }}
            >
              {tableStatusesOptions.map((option: any) => (
                <option value={option}>{option}</option>
              ))}
            </Form.Select>
          </div>
          <div className="d-flex align-items-center">
            <Card.Text className="pt-3 me-2">
              <strong>People: </strong>
            </Card.Text>
            <Form.Control
              value={people}
              min={0}
              max={maxPeople}
              onChange={(e) => setPeopleAmount(e.target.value)}
              className="me-2"
              style={{ width: "70px" }}
              type="number"
            ></Form.Control>
            /
            <Form.Control
              value={maxPeople}
              min={1}
              max={10}
              onChange={(e) => handleMaxPeopleAmountChange(e)}
              className="ms-2"
              style={{ width: "70px" }}
              type="number"
            ></Form.Control>
          </div>
          {tableStatus === "Busy" && (
            <div className="d-flex align-items-center">
              <Card.Text className="pt-3 ">
                <strong>Bill: </strong> <strong className="ms-3">$</strong>
              </Card.Text>
              <Form.Control
                value={billValue}
                min={0}
                onChange={(e) => setBillValue(e.target.value)}
                className="ms-2"
                style={{ width: "100px" }}
                type="number"
              ></Form.Control>
            </div>
          )}
          <Button onClick={handleUpdate} className="ms-1 mt-4" variant="light">
            Update
          </Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default SingleTable
