import React from "react"
import { EmployeeList, MessageList, NewMessageForm } from "../components"
import { Col, Container, Row } from "react-bootstrap"
import { useEmployeeContext } from "../ctx/EmployeeContext"


function MessageBoard({ children }) {
const { currEmployee } = useEmployeeContext()

  return (
    <Container className="col-xl-12 d-flex flex-row ms-0">
      <Container className="col-xl-3 align-items-start">
        <Col className="col-xl-12 col-9 px-5">
          <EmployeeList>
            {children}
          </EmployeeList>
        </Col>
      </Container>
      <Col className="col-xl-9 d-flex align-items-end w-100 flex-wrap">
        <Container className="col-xl-12" >
          <Row className="">
            <MessageList>
              {children}
            </MessageList>
          </Row>
        </Container>
        <Row className="w-100">
          <NewMessageForm />
        </Row>
      </Col>
    </Container>
  )
}

export default MessageBoard;