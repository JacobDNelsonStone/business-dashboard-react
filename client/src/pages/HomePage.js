import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { useEmployeeContext } from "../ctx/EmployeeContext"
import { Container1, MeetingList } from "../components";
import Charts from "../components/Charts";
import { Card, Container, Spinner } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

const HomePage = () => {

  // obtains current employee via middleware
  const { currEmployee } = useEmployeeContext()

  const checkForMeetings = async () => {
    try {
      const resp = await fetch(`/api/meeting/`)
      const result = await resp.json()
      if (result.status === "success") {
        // setMeetingList(result.payload)
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    checkForMeetings()
  }, [currEmployee])

  if (currEmployee.status === "notfound")
    return (
      <center>
        <Card bg="danger" className="col-6">
          <CardHeader>
            <h1 className="text-light">Please sign up or log in to view your department</h1>
          </CardHeader>
          <div className="py-5">
            <Spinner variant='light' />
          </div>

        </Card>
      </center>
    )

  return (
    <>
      <h1>Home Page</h1>
      {/* <Container1 /> */}
      <Container className="col-xl-6 mb-3 align-items-start zoomAnimation">
        <Card bg="info">
          <Charts />
        </Card>
      </Container>
      <Link to="/meetingPage" style={{textDecoration: "none", textDecorationColor: "none"}}>
        < MeetingList />
      </Link>
      {/* {currEmployee.status === "notfound" ? (
        <p>Sign in or log in to see your company's data!.</p>
      ) : (
        <> */}
      {/* if there are no meetings, prompt user to make one */}
      {/* {MeetingList.length === 0 ? (
            <p>
              Sorry, no items available. You can{" "}
              <Link to="/meeting/0">create one now</Link>.
            </p>
          ) : (
            // else, list every meeting
            <ul>
              {MeetingList.map((meeting) => (
                <li key={meeting._id}>
                  <Link to={`/meeting/${meeting._id}`}>{meeting.item}</Link>
                </li>
              ))}
            </ul>
          )} */}
      {/* </>
      )} */}
    </>
  );
}

export default HomePage