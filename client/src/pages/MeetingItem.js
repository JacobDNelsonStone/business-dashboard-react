import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { useEmployeeContext } from "../ctx/EmployeeContext"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const MeetingItem = () => {
  const [ meetingItem, setMeetingItem ] = useState({ item: "" })
  const [ formMessage, setFormMessage ] = useState({ type: "", msg: "" })
  const { currEmployee } = useEmployeeContext()
  const { id } = useParams()
  
  const handleInputChange = (e) => {
    setFormMessage({ type: "", msg: "" })
    setMeetingItem({...meetingItem, item: e.target.value})
  }

  // if the id is anything but 0, query for that item via the api. 0 means it's a new Meeting being created.
  const lookupMeeting = async () => {
    try {
      const resp = await fetch(`/api/meeting/${id}`)
      const result = await resp.json()
      if( result.status === "success" ){
        setMeetingItem(result.payload)
      }
    } catch(err){
      console.log(err.message)
    }
  }

  const saveMeeting = async(e) => {
    e.preventDefault()
    if( !meetingItem.item.trim().length ) return setFormMessage({ type: "danger", msg: "Please provide a meeting first!" })
    const method = (id == "0") ? "POST" : "PUT"
    const path = (id == "0") ? `/api/meeting/employee/${currEmployee.data._id}` : `/api/meeting/${id}`
    try {
      const resp = await fetch(path, {
        method: method, 
        body: JSON.stringify(meetingItem),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const result = await resp.json() 
      if( result.status === "success" ){
        setFormMessage({ type: "success", msg: "Changes saved successfully!" })
      }
    } catch(err){
      setFormMessage({ type: "danger", msg: "There was an error attempting to save this meeting." })
    }
  }

  useEffect(() => {
    if( id && id != "0" ){
      lookupMeeting()
    }
  }, [id])

  if( currEmployee.status === "searching" ) return <></>
  return (
    <>
      <h1>Home Page</h1>

      { currEmployee.status === "notfound" ? (
        <p>You must be logged in to work with any Meeting items.</p>
      ) : (
        <>
          <Form onSubmit={saveMeeting}>
            <Form.Group className="mb-3" controlId="MeetingForm.MeetingItem">
              <Form.Label>Enter your Meeting here</Form.Label>
              <Form.Control 
                as="textarea" 
                name="item" 
                value={MeetingItem.item} 
                onChange={handleInputChange} 
                rows={3} 
              />
            </Form.Group>

            <Button variant="primary" type="submit">Save Changes</Button>
          </Form>

          { formMessage.type.length > 0 && formMessage.msg.length > 0 && (
            <div className={`mt-3 alert alert-${formMessage.type}`} role="alert">
              { formMessage.msg }
            </div>
          )}
        </>
      )}
    </>
  )
}

export default MeetingItem