import { Form } from "react-bootstrap"

function CheckBox({ employees }) {
  console.log(employees._id)
  return (
    <>
      <Form.Check
        type='switch'
        id={employees._id}
        label={`${employees.fname} ${employees.lname}`}
      />

    </>
  )
}

export default CheckBox;