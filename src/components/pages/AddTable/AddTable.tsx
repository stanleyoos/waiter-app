import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Form, Card, Button } from "react-bootstrap"
import { getAllTableStatuses } from "../../../redux/subreducers/tableStatusRedux"
import { useState } from "react"
import {
  addTableRequest,
  getAllTables,
} from "../../../redux/subreducers/tableRedux"

const AddTable = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const tablesIDs = useSelector(getAllTables).map((table: any) =>
    Number(table.id)
  )

  const idOfTables = arr.filter((num: any) =>
    tablesIDs.includes(num) ? null : num
  )

  const [id, setId] = useState<any>(1)
  const [people, setPeopleAmount] = useState<any>(1)
  const [maxPeople, setMaxPeopleAmount] = useState<any>(3)
  const [billValue, setBillValue] = useState<any>(12)
  const [tableStatus, setTableStatus] = useState("Free")

  const tableStatusesOptions = useSelector(getAllTableStatuses)

  const handleTableStatusChange = (e: any) => {
    setTableStatus(e.target.value)
  }

  const handleMaxPeopleAmountChange = (e: any) => {
    const maxValue = e.target.value
    if (people >= maxPeople) setPeopleAmount(maxValue)
    setMaxPeopleAmount(maxValue)
  }

  const handleAdd = () => {
    dispatch(
      addTableRequest({
        id: String(id),
        status: tableStatus,
        peopleAmount: people,
        maxPeopleAmount: maxPeople,
        bill: billValue,
      })
    )
    navigate("/")
  }

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="mb-4">
            <h1>Table </h1>
          </Card.Title>

          <div className="d-flex align-items-center">
            <Card.Text className="pt-3 me-2">
              <strong>ID: </strong>
            </Card.Text>
            <Form.Select
              value={id}
              onChange={(e) => setId(e.target.value)}
              style={{ width: "140px" }}
            >
              {idOfTables.map((option: any) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Form.Select>
          </div>

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
                <option key={option} value={option}>
                  {option}
                </option>
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
          <Button onClick={handleAdd} className="ms-1 mt-4" variant="light">
            Add table
          </Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default AddTable
