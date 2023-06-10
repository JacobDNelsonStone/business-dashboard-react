import { Form, FormCheck } from "react-bootstrap"
import CheckBox from "./CheckBox"

function CheckBoxContainer({ employees, children, chosenEmployeeArr, setChosenEmployeeArr }) {
  // console.log(employees)
  // console.log(chosenEmployeeArr)
  return (
    <>
      <Form.Group>
        <CheckBox employees={employees} chosenEmployeeArr={chosenEmployeeArr} setChosenEmployeeArr={setChosenEmployeeArr} />
      </Form.Group>
    </>
  )
}

export default CheckBoxContainer;