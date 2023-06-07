import { createContext, useContext, useState, useEffect } from "react" 
import Cookies from "js-cookie";

const EmployeeContext = createContext({})
export const useEmployeeContext = () => useContext(EmployeeContext)

export const EmployeeProvider = ({ children }) => {
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
      } catch(err){
        setCurrEmployee({ status: "notfound", data: null })
        // if( !window.location.href.includes("/login") ){
        //   window.location.href = "/login"
        // } 
        // else {
        //   setCurrEmployee({ status: "notfound" })
        // }
      }
    }
  }

  const logout = () => {
    Cookies.remove("auth-cookie");
    setCurrEmployee({ status: "searching", data: null })
    window.location.href = "/login"
  }

  useEffect(() => {
    verifyEmployee()
  }, [window.location.href])


  return (
    <EmployeeContext.Provider value={{ currEmployee, logout }}>
      { children }
    </EmployeeContext.Provider>
  )
}