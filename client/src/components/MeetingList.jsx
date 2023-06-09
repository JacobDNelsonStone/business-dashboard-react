import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container, Form, Row } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const MeetingsList = () => {
  const [meetings, setMeetings] = useState([])

  const getMeetings = async () => {
    try {
      const query = await fetch('/api/meeting', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const res = await query.json()
      // console.log(res)
      if (res) {
        setMeetings(res.payload)
        // console.log(meetings)
        // console.log(meetings[0].employees[0].fname)
        // console.log(meetings[0]._id)
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    getMeetings()
  }, [meetings.length])

  return (
    <Container className={!window.location.pathname.includes('/meetingPage') ? "zoomAnimation" : ""} style={{ border: "3px solid white", borderRadius: "12px" }}>
      <h2 className='fs-1 pb-5'>Upcoming Meetings!</h2>
      <Row className=''>
        {meetings.length && meetings.map((meeting) => (
          <Card key={meeting._id} bg="success text-light col-xl-3 cardHeight">
            <CardHeader className="fs-4" shadow="10">
              {meeting.meetingTopic}
            </CardHeader>
            <h4 className="fs-5">{meeting.meetingDate}</h4>
            {meeting.employees.map(employee =>
              <CardHeader border="warning">{employee.fname} {employee.lname}</CardHeader>
            )}
          </Card>
        ))}
      </Row>
      <Row>
        
      </Row>
    </Container>
  );
};

export default MeetingsList;