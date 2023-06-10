import { useState } from "react"
import { Form, FormCheck } from "react-bootstrap"

function CheckBox({ employees }) {
  // console.log(employees[0].fname)
  // console.log(employees.map(employee => employee.fname + " " + employee.lname))
  const [chosenEmployees, setChosenEmployees] = useState([])
  const [chosenEmployeeArr, setChosenEmployeeArr] = useState([])

  const getChosenEmployees = (e) => {
    e.preventDefault()
    // console.log(e.target.value)
    setChosenEmployees(chosenEmployeeArr.concat(e.target.value));
    console.log(chosenEmployeeArr)
    setChosenEmployees(chosenEmployeeArr)
    console.log(chosenEmployees)
  }

  return (
    <>
      {employees.map(employee => (
        <FormCheck
          key={employee._id}
          className="text-dark"
          type='switch'
          id={employee._id}
          value={employee._id}
          label={employee.fname + " " + employee.lname}
          onChange={getChosenEmployees}
        />
      ))}
    </>
  )
}

export default CheckBox;