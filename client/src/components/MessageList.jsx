import { Container, Col, Row, Card } from "react-bootstrap"
import { useState, useEffect } from "react";

function MessageList(props) {
  const [messages, setMessages] = useState([])

  const getMessages = async () => {
    try {
      const query = await fetch('/api/message', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const res = await query.json()
      console.log(res)
      if (res) {
        setMessages(res.payload)
        console.log(messages)
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    getMessages()
  }, [])
  return (
    <>
      {messages && messages.map(message => (
        <Card className="px-3">
          <Row key={message._id} >
            <h1 className="content fs-4">{message.employeeId.fname} {message.employeeId.lname}</h1>

            <p className="fs-5">{message.messageText}</p>
          </Row>
        </Card>
      )

      )}
    </>
  )
}

export default MessageList