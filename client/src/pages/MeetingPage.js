import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { useEmployeeContext } from "../ctx/EmployeeContext"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MeetingList, CheckBoxContainer } from "../components";
import { Col, Container, FormCheck, Modal, ModalHeader, Row } from "react-bootstrap";

const MeetingPage = () => {
  const [chosenEmployeeArr, setChosenEmployeeArr] = useState([])


  const [statusMessage, setStatusMessage] = useState({})
  const formMessage = { meetingTopic: "", meetingDate: "", employees: [] }
  const [newMeeting, setNewMeeting] = useState(formMessage)
  const { currEmployee } = useEmployeeContext()
  const { id } = useParams()
  const [employees, setEmployees] = useState([])
  const [modalState, setModalState] = useState({ isOpen: false })

  const openModal = () => setModalState({ isOpen: true });
  const closeModal = () => setModalState({ isOpen: false });

  const getUsers = async () => {

    try {
      const query = await fetch('/api/employee', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const res = await query.json()
      if (res) {
        setEmployees(res.payload)
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  const handleInputChange = (e) => {
    setNewMeeting({ ...newMeeting, [e.target.name]: e.target.value })
  }

  const saveMeeting = async (e) => {
    e.preventDefault()
    closeModal()
    setNewMeeting({ ...newMeeting, employees: newMeeting.employees.concat(chosenEmployeeArr) })
    if (!newMeeting.meetingTopic.trim().length) {
      setStatusMessage({ type: "danger", msg: "Please provide a meeting topic first!" })
      return statusMessage;
    }

    const path = '/api/meeting/new'
    try {
      const resp = await fetch(path, {
        method: "POST",
        body: JSON.stringify(newMeeting),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const result = await resp.json()
      if (result.status === "success") {
        setStatusMessage({ type: "success", msg: "Changes saved successfully!" })
        // console.log(result.payload)
        window.location.reload()
      }
    } catch (err) {
      setStatusMessage({ type: "danger", msg: "There was an error attempting to save this meeting." })
    }
  }

  useEffect(() => {
    getUsers()
  }, [window.location.href])

  if (currEmployee.status === "searching") return <></>
  return (
    <>
      <center><Button variant="warning" className="my-5" onClick={openModal}>Add a new meeting?</Button></center>
      {modalState.isOpen === true ? (
        <Modal
          show={modalState.isOpen}
          tabIndex='5'
        >
          <ModalHeader className="text-dark">Create A New Meeting</ModalHeader>
          <Modal.Body className="col-xl-12" onSubmit={saveMeeting}>
            <Form.Group className="mb-3 text-dark" controlId="MeetingForm.MeetingTopic">
              <Modal.Title>Enter the Meeting Topic Here</Modal.Title>
              <Form.Control
                className="h-10"
                required
                as="textarea"
                name='meetingTopic'
                value={newMeeting.meetingTopic}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 text-dark" controlId="MeetingForm.MeetingDate">
              <Modal.Title>Enter the Date of the Meeting Here</Modal.Title>
              <Form.Control
                className="h-10"
                required
                as="textarea"
                name='meetingDate'
                value={newMeeting.meetingDate}
                onChange={handleInputChange}
              />
            </Form.Group>

            <CheckBoxContainer employees={employees} chosenEmployeeArr={chosenEmployeeArr} setChosenEmployeeArr={setChosenEmployeeArr} />

            <Container className="d-xl-flex justify-content-center">
              <Row className="col-xl-6 me-4">
                <Button variant="primary" className=" me-2 mt-2" onClick={saveMeeting} type="submit">Create Meeting</Button>
              </Row>
              <Row float="left" className="col-xl-6 float-end">
                <Button variant="primary" className="me-2 mt-2" onClick={closeModal} type="button">Close</Button>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      ) : (
        <> </>
      )
      }
      <MeetingList />
    </>
  )
}


export default MeetingPage