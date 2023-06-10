import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { useEmployeeContext } from "../ctx/EmployeeContext"
import {Container1, MeetingList, Charts } from "../components";
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

  // if not logged in, prompt user to login or sign-in
  if (currEmployee.status === "notfound")
    return (
      <center>
        <h1>All-In-One Business Dashboard</h1>
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

  // else, render chart & meeting list
  return (
    <>
      <h1>All-In-One Business Dashboard</h1>
      {/* <Container1 /> */}
      <Container className="col-xl-6 mb-3 align-items-start zoomAnimation">
        <Card bg="info">
          <Charts />
        </Card>
      </Container>
      <Link to="/meetingPage" style={{textDecoration: "none", textDecorationColor: "none"}}>
        < MeetingList />
      </Link>
    </>
  );
}

export default HomePage