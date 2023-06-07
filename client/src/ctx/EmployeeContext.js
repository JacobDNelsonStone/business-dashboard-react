import { createContext, useContext, useState, useEffect } from "react" 
import Cookies from "js-cookie";

const EmployeeContext = createContext({})
export const useEmployeeContext = () => useContext(EmployeeContext)

export const EmployeeProvider = ({ children }) => {
  // when user first arrives, sets currUser to "searching" + null data
  const [ currEmployee, setCurrEmployee ] = useState({ status: "searching", data: null })

  const verifyEmployee = async() => {
    setCurrEmployee({ status: "searching", data: null })
    if( Cookies.get("auth-cookie") ){
      try {
        const query = await fetch("/api/employee/verify", {
          method: "post",
          body: JSON.stringify({}),
          headers: {
            "Content-Type": "application/json"
          }
        })
        const result = await query.json()
        if( result && result.status === "success" ){
          setCurrEmployee({ status: "found", data: result.payload })
        } else {
          setCurrEmployee({ status: "notfound" })
        }
      // No cookie/current user = redirect to login
      } catch(err){
        setCurrEmployee({ status: "notfound", data: null })
        // if( !window.location.href.includes("/login") ){
        //   window.location.href = "/login"
        // } 
        // else {
        //   setCurrEmployee({ status: "notfound" })
        // }
      }
    // catch-all/failsafe if browser's still "searching" for employee
    } else {
      setCurrEmployee({ status: "notfound" });
    }
  }

  // logs out employee + redirects to "login" page
  const logout = () => {
    Cookies.remove("auth-cookie");
    setCurrEmployee({ status: "searching", data: null })
    window.location.href = "/login"
  }

  // when window is opened, checks if employee is logged in
  useEffect(() => {
    verifyEmployee()
  }, [window.location.href])


  return (
    <EmployeeContext.Provider value={{ currEmployee, logout }}>
      { children }
    </EmployeeContext.Provider>
  )
}