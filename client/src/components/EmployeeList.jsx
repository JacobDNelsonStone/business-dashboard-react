import { useEffect, useState } from "react";
import { Col, Row, Card } from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader";

function EmployeeList(props) {
  const [employees, setEmployees] = useState([])

  const getUsers = async () => {

    try {
      const query = await fetch('/api/employee', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      
      const res = await query.json()
      console.log(res)
      if (res) {
        setEmployees(res.payload)
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <Col className="">
      {employees && employees.map(employee => (
        <Card className="py-2" bg="dark" variant="dark" key={employee.fname}>
          <CardHeader className="text-light zoomAnimation">
            {employee.fname} {employee.lname}
          </CardHeader>
        </Card>
      )
      )}
    </Col>
  )
}

export default EmployeeList