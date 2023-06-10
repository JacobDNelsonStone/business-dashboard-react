import { Form, FormCheck } from "react-bootstrap"
import CheckBox from "./CheckBox"

function CheckBoxContainer({ employees, children }) {
  console.log(employees)
  return (
    <>
      <Form.Group>
        <CheckBox employees={employees} />
      </Form.Group>
    </>
  )
}

export default CheckBoxContainer;