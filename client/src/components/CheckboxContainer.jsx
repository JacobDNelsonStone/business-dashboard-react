import { Form, FormCheck } from "react-bootstrap"
import CheckBox from "./CheckBox"

function CheckBoxContainer({ employees, children }) {

  return (
    <Form.Group>
        <CheckBox employees={employees} >

        </CheckBox>
    </Form.Group>
  )
}

export default CheckBoxContainer;