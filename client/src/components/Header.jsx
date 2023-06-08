import { useState } from "react"
import { useEmployeeContext } from "../ctx/EmployeeContext"
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  const { currEmployee, logout } = useEmployeeContext()
  console.log(window.location.pathname)
  return (
    <header className="pb-0 mb-0" style={{ borderBottom: "1px solid #333" }}>
      <Navbar bg="" variant="#2FBEBE" expand="md" style={{ justifyContent: "space-between", border: "0px" }}>
        <div className="container-fluid" style={{ width: "65%"}}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            {/* Add the activeKey code below and the rest shoud work  */}
            <Nav className="me-auto" activeKey={window.location.pathname}>
              <li><Nav.Link href="/">Home</Nav.Link></li>

              { currEmployee.status === "notfound" && (
                <>
                  <li><Nav.Link href="/signup">Signup Page</Nav.Link></li>
                  <li><Nav.Link href="/login">Login Page</Nav.Link></li>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
        <div style={{ width: "35%", paddingRight: "10px" }}>
          { currEmployee.status === "found" && (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ display: "flex", justifyContent: "flex-end"}}>
              <li className="nav-item">
                  <span className="nav-link active">Welcome back, {currEmployee.data.fname}</span>
              </li>
              <li className="nav-item">
                <a className="nav-link active" onClick={logout}>Logout</a>
              </li>
            </ul>
          )}
        </div>
      </Navbar>
    </header>
  )
}


export default Header