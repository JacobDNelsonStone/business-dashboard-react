import React from "react"
import { EmployeeList, MessageList } from "../components"
import { Col, Container } from "react-bootstrap"


function MessageBoard({ children }) {

  return (
    <Container className="col-xl-12 d-flex flex-row">
      <Col className="col-xl-3 col-9">
        <EmployeeList>
          {children}
        </EmployeeList>
      </Col>
      <Col className="col-xl-9 d-flex">
        <MessageList>
          { children }
        </MessageList>
      </Col>
    </Container>
  )
}

export default MessageBoard;