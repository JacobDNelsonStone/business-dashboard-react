import React from "react";
import { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useEmployeeContext } from "../ctx/EmployeeContext";


function NewMessageForm(props) {
  const { currEmployee } = useEmployeeContext()
  const newMsgForm = { messageText: "", employeeId: '' };
  const [formData, setFormData] = useState(newMsgForm);

  // console.log(currEmployee.data._id)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
  }

  useEffect(() => {
    
    setFormData({ ...formData, employeeId: currEmployee.data._id })
  }, [currEmployee])

  const postNewMessage = async (e) => {
    e.preventDefault()
    console.log(formData);
    try {
      const query = await fetch('/api/message', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        }
      })
      console.log(query)
      console.log(query.ok)
      if (query.ok) {
        // const res = await query.json()
        // console.log(res.payload);
        // setFormData(res.payload);
        alert('Your message was sent to the board!')
        window.location.reload()
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    console.log('==========', formData.messageText)

    if (formData.text === '') {
      alert("text field must be filled out :)")
    } else {
      postNewMessage(e)
    }
  }

  return (
    <Card bg="dark" variant="dark" className='pb-2 px-3'>
      <h1 style={{ color: 'white' }}>Write a New Message</h1>
      <Form className=''>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control
            required
            type="text"
            name="messageText"
            value={formData.messageText}
            placeholder="Enter your message for the board"
            onChange={handleInputChange}
          />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Button variant="warning" className='my-2' type="submit" onClick={handleFormSubmit}>
          Submit
        </Button>
      </Form>
    </Card >
  )
}

export default NewMessageForm