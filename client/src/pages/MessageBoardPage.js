import React from "react"
import { EmployeeList } from "../components"
import { Container } from "react-bootstrap"


function MessageBoard({ children }) {

  return (
    <Container className="col-xl-3 col-9">
      < EmployeeList >
        {children}
      </EmployeeList>
    </Container>
  )
}

export default MessageBoard;