import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { useEmployeeContext } from "../ctx/EmployeeContext"
import {Container1, MeetingList, Charts } from "../components";
// import {Charts} from "../components/Charts";

const HomePage = () => {

  // obtains current employee via middleware
  const { currEmployee } = useEmployeeContext()
  
  const checkForMeetings = async () => {
    try {
      const resp = await fetch(`/api/meeting/`)
      const result = await resp.json()
      if( result.status === "success" ){
        // setMeetingList(result.payload)
      }
    } catch(err){
      console.log(err.message)
    }
  }

  useEffect(() => {
    checkForMeetings()
  }, [currEmployee])

//  if( currEmployee.status === "notfound" || currEmployee.status === "searching" ) return <></>
  return (
    <>
      <h1>All-In-One Business Dashboard</h1>

      {currEmployee.status === "notfound" ? (
        <h3>Sign in or log in to see your company's data!.</h3>
      ) : (
        <>
          <Container1 />
          <Charts />
          < MeetingList />
        </>
      )}
      

      
      
    </>
  );
}

export default HomePage