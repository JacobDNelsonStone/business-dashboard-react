import { useState } from "react"
import { Form, FormCheck } from "react-bootstrap"

function CheckBox({ employees, setChosenEmployeeArr, chosenEmployeeArr }) {
  console.log(chosenEmployeeArr)

  const getChosenEmployees = (e) => {
    // console.log(e.target.value)
    if(!chosenEmployeeArr.includes(e.target.value)) {
    setChosenEmployeeArr(chosenEmployeeArr.concat(e.target.value));
    }
    console.log(chosenEmployeeArr)
  }

  return (
    <>
      {employees.map(employee => (
        <FormCheck
          key={employee._id}
          className="text-dark"
          type='checkbox'
          id={employee._id}
          value={employee._id}
          label={employee.fname + " " + employee.lname}
          onClick={getChosenEmployees}
        />
      ))}
    </>
  )
}

export default CheckBox;