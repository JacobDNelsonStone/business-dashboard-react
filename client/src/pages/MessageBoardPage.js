import React from "react"
import { EmployeeList, MessageList } from "../components"
import { Col, Container } from "react-bootstrap"


function MessageBoard({ children }) {

  return (
    <Container className="col-xl-12 d-flex flex-row ms-0">
      <Container className="col-xl-3 align-items-start">
        <Col className="col-xl-12 col-9 px-5">
          <EmployeeList>
            {children}
          </EmployeeList>
        </Col>
      </Container>
      <Container className="ms-5 col-xl-9 d-flex align-items-end ">
        <Col className="">
          <MessageList>
            {children}
          </MessageList>
        </Col>
      </Container>
    </Container>
  )
}

export default MessageBoard;