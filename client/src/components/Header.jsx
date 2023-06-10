import { useState } from "react";
import { useEmployeeContext } from "../ctx/EmployeeContext";
import { Navbar, Nav, Row } from "react-bootstrap";
// import {  } from "../styles/HeaderButtons.js";

const Header = () => {
  const { currEmployee, logout } = useEmployeeContext();
  // console.log(window.location.pathname);
  // console.log(currEmployee.status);
  const [homeClicked, setHomeClicked] = useState(false);
  const [signClicked, setSignClicked] = useState(false);
  const [loginClicked, setLoginClicked] = useState(false);

  const handleHomeClick = () => {
    setHomeClicked(true);
  };

  const handleSignClick = () => {
    setSignClicked(true);
  };

  const handleLoginClick = () => {
    setLoginClicked(true);
  };

  const headerButtonDefaultStyle = {
    backgroundColor: loginClicked ? "darkred" : "DarkMagenta",
    borderRadius: "10px",
    margin: "5px",
    padding: "10px 10px",
    opacity: "1",
    position: "static",
    transition: "background-color 0.3s ease",
    // transition: "opacity 0.3s ease",

    // clipPath: loginClicked
    //   ? "polygon(0 0, 100% 0, 50% 100%)"
    //   : "none",
    // transform: loginClicked ? "translateY(4px)" : "none",
  }

  return (
    <header style={{ borderBottom: "3px solid #333", cursor: 'default' }}>
      <Navbar
        collapseOnSelect
        bg=""
        variant="#2FBEBE"
        expand="md"
        style={{backgroundColor:"#2FBEBE"}} 
      >
        {/* <div
          className="container-fluid d-flex "
          style={{ width: "100%", flexWrap: "wrap", backgroundImage: 'linear-gradient(to right, #ff0000, #00ff00, #0000ff, transparent)', }}
        > */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* HOME BUTTON */}
          <li
            variant="outline-light"
            className="nav-link zoomAnimation active text-light fs-4"
            style={{
              ...headerButtonDefaultStyle,
              listStyle: "none",
              // fontSize: "2vw",
              // width: "100%",
              // height: "90%",
              padding: "20px 20px 20px 20px",
              backgroundColor: homeClicked ? "rgba(255, 0, 0, 0.5)" : "red",
              opacity: homeClicked ? "0.8" : "1",
              // transition: "opacity 0.3s ease",
              // clipPath: homeClicked
              //   ? "polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)"
              //   : "none",
              // transform: homeClicked ? "rotate(180deg)" : "none",
              position: "static",
            }}
            onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
            onMouseLeave={(e) =>
              (e.target.style.opacity = homeClicked ? "0.8" : "1")
            }
            onClick={handleHomeClick}
          >
            <Nav.Link className="nav-link zoomAnimation active text-light fs-4" href="/" >
                Home
            </Nav.Link>
          </li>
          
          <Navbar.Collapse id="basic-navbar-nav">

            {/* Add the activeKey code below and the rest should work  */}
            <Nav className="justify-content-end flex-grow-1 me-auto" activeKey={window.location.pathname}>
              

              {/* Changes nav links depending on the user's status */}
              {(currEmployee.status === "notfound" || currEmployee.status === "searching") && (
                <>
                  <li
                    className="zoomAnimation"
                    variant="outline-light"
                    style={{
                      ...headerButtonDefaultStyle,
                      backgroundColor: signClicked ? "darkred" : "RoyalBlue",
                      // borderRadius: "50%",
                      // clipPath: signClicked
                      //   ? "polygon(50% 0, 80% 40%, 100% 40%, 85% 60%, 100% 100%, 50% 80%, 0 100%, 15% 60%, 0 40%, 20% 40%)"
                      //   : "none",
                      // transform: signClicked ? "translateY(4px)" : "none",
                    }}
                    onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
                    onMouseLeave={(e) => (e.target.style.opacity = "1")}
                    onClick={handleSignClick}
                  >
                    <Nav.Link className="nav-link zoomAnimation active text-light fs-4" href="/signup">Signup</Nav.Link>
                  </li>
                  <li
                    variant="outline-light"
                    style={{
                      ...headerButtonDefaultStyle,
                      backgroundColor: loginClicked ? "darkred" : "gray",
                      // borderRadius: "0 0 50% 50%",
                      // clipPath: loginClicked
                      //   ? "polygon(0 0, 100% 0, 50% 100%)"
                      //   : "none",
                      // transform: loginClicked ? "translateY(4px)" : "none",
                    }}
                    onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
                    onMouseLeave={(e) => (e.target.style.opacity = "1")}
                    onClick={handleLoginClick}
                  >
                    <Nav.Link className="nav-link zoomAnimation active text-light fs-4" href="/login">Login</Nav.Link>
                  </li>
                </>
              )}

              {/* if user is "found" (signed-in), give option to Logout */}
              {currEmployee.status === "found" && (
                <>
                  <li 
                    className="nav-item"
                    style={{
                      ...headerButtonDefaultStyle,
                      backgroundColor: "black",
                    }}
                  >
                    <span className="nav-link active text-light">
                      Welcome back, {currEmployee.data.fname}
                    </span>
                  </li>
                  <li
                    style={{
                      ...headerButtonDefaultStyle,
                      backgroundColor: loginClicked ? "darkred" : "darkblue",
                      clipPath: loginClicked
                        ? "polygon(0 0, 100% 0, 50% 100%)"
                        : "none",
                      transform: loginClicked ? "translateY(4px)" : "none",
                    }}
                    onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
                    onMouseLeave={(e) => (e.target.style.opacity = "1")}
                  >
                    <Nav.Link className="nav-link zoomAnimation active text-light fs-6" href="/meetingPage">
                      Meetings
                    </Nav.Link>
                  </li>
                  <li
                    style={{
                      ...headerButtonDefaultStyle,
                      backgroundColor: loginClicked ? "darkred" : "green",
                      clipPath: loginClicked
                        ? "polygon(0 0, 100% 0, 50% 100%)"
                        : "none",
                      transform: loginClicked ? "translateY(4px)" : "none",
                    }}
                    onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
                    onMouseLeave={(e) => (e.target.style.opacity = "1")}
                  >
                    <Nav.Link className="nav-link zoomAnimation active text-light fs-6" href="/department">
                      Department Stats
                    </Nav.Link>
                  </li>
                  <li
                    style={{
                      ...headerButtonDefaultStyle,
                      backgroundColor: loginClicked ? "darkred" : "DarkMagenta",
                      clipPath: loginClicked
                        ? "polygon(0 0, 100% 0, 50% 100%)"
                        : "none",
                      transform: loginClicked ? "translateY(4px)" : "none",
                    }}
                    onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
                    onMouseLeave={(e) => (e.target.style.opacity = "1")}
                  >
                    <Nav.Link className="nav-link zoomAnimation active text-light fs-6" href="/messageBoard">
                      Message Board
                    </Nav.Link>
                  </li>
                  <li 
                    className="nav-item"
                    style={{
                      ...headerButtonDefaultStyle,
                      backgroundColor: loginClicked ? "darkred" : "Indigo",
              
                      clipPath: loginClicked
                        ? "polygon(0 0, 100% 0, 50% 100%)"
                        : "none",
                      transform: loginClicked ? "translateY(4px)" : "none",
                    }}
                    onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
                    onMouseLeave={(e) => (e.target.style.opacity = "1")}
                  >
                    <a className="nav-link zoomAnimation active text-light fs-6" onClick={logout}>
                      Logout
                    </a>
                  </li>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        {/* </div> */}
      </Navbar>
    </header>
  );
};

export default Header;
