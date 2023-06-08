import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { useEmployeeContext } from "../ctx/EmployeeContext"
import Container1 from "../components/Container1";

const HomePage = () => {
  const [ MeetingList, setMeetingList ] = useState([])

  // obtains current employee via middleware
  const { currEmployee } = useEmployeeContext()
  
  const checkForMeetings = async () => {
    try {
      const resp = await fetch(`/api/meeting/all/${currEmployee.data._id}`)
      const result = await resp.json()
      if( result.status === "success" ){
        setMeetingList(result.payload)
      }
    } catch(err){
      console.log(err.message)
    }
  }

  useEffect(() => {
    checkForMeetings()
  }, [currEmployee])

 if( currEmployee.status === "searching" ) return <></>
  return (
    
    <>
      <h1>Home Page</h1>
      <Container1/>

      { currEmployee.status === "notfound" ? (
        <p>Sign in or log in to see your company's data!.</p>
      ) : (
        <>
        {/* if there are no meetings, prompt user to make one */}
          { MeetingList.length === 0 ? (
            <p>Sorry, no items available. You can <Link to="/meeting/0">create one now</Link>.</p>
          ) : (
            // else, list every meeting
            <ul>
              { MeetingList.map( meeting => (
                <li key={meeting._id}>
                  <Link to={`/meeting/${meeting._id}`}>
                    { meeting.item }
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </>
  )
}

export default HomePage