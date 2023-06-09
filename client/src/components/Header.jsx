import { useState } from "react";
import { useEmployeeContext } from "../ctx/EmployeeContext";
import { Navbar, Nav, Row } from "react-bootstrap";

const Header = () => {
  const { currEmployee, logout } = useEmployeeContext();
  console.log(window.location.pathname);
  console.log(currEmployee.status);
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

  return (
    <header className="pb-0 mb-0" style={{ borderBottom: "3px solid #333", cursor: 'default' }}>
      <Navbar
        bg=""
        variant="#2FBEBE"
        expand="md"
        style={{ justifyContent: "space-between", border: "0px" }}
      >
        <div
          className="container-fluid d-flex "
          style={{ width: "100%", flexWrap: "wrap", backgroundImage: 'linear-gradient(to right, #ff0000, #00ff00, #0000ff, transparent)', }}
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">


            {/* Add the activeKey code below and the rest shoud work  */}
            <Nav className="me-auto py-2" activeKey={window.location.pathname}>
              <li
                variant="outline-light"
                style={{
                  width: "100%",
                  backgroundColor: homeClicked ? "rgba(255, 0, 0, 0.5)" : "red",
                  borderRadius: "10px",
                  margin: "5px",
                  padding: "10px 10px",
                  opacity: homeClicked ? "0.8" : "1",
                  transition: "opacity 0.3s ease",
                  clipPath: homeClicked
                    ? "polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)"
                    : "none",
                  transform: homeClicked ? "rotate(180deg)" : "none",
                  position: "static",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
                onMouseLeave={(e) =>
                  (e.target.style.opacity = homeClicked ? "0.8" : "1")
                }
                onClick={handleHomeClick}
              >
                <div
                  style={{ transform: homeClicked ? "rotate(-45deg)" : "none" }}
                ></div>
                <Nav.Link className="text-light zoomAnimation fs-3" href="/">Home</Nav.Link>
              </li>
              <li><Nav.Link className="text-light zoomAnimation fs-3" href="/messageBoard">Message Board</Nav.Link></li>

              {/* Changes nav links depending on the user's status,  */}
              {currEmployee.status === "notfound" && (
                <>
                  <li
                  className="zoomAnimation"
                    variant="outline-light"
                    style={{
                      backgroundColor: signClicked ? "darkred" : "yellow",
                      borderRadius: "50%",
                      margin: "5px",
                      padding: "10px",
                      opacity: "1",
                      position: "static",
                      transition: "background-color 0.3s ease",
                      clipPath: signClicked
                        ? "polygon(50% 0, 80% 40%, 100% 40%, 85% 60%, 100% 100%, 50% 80%, 0 100%, 15% 60%, 0 40%, 20% 40%)"
                        : "none",
                      transform: signClicked ? "translateY(4px)" : "none",
                    }}
                    onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
                    onMouseLeave={(e) => (e.target.style.opacity = "1")}
                    onClick={handleSignClick}
                  >
                    <Nav.Link href="/signup">Signup</Nav.Link>
                  </li>
                  <li
                    variant="outline-light"
                    style={{
                      backgroundColor: loginClicked ? "darkred" : "gray",
                      borderRadius: "0 0 50% 50%",
                      margin: "5px",
                      padding: "10px",
                      opacity: "1",
                      transition: "background-color 0.3s ease",
                      clipPath: loginClicked
                        ? "polygon(0 0, 100% 0, 50% 100%)"
                        : "none",
                      transform: loginClicked ? "translateY(4px)" : "none",
                    }}
                    onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
                    onMouseLeave={(e) => (e.target.style.opacity = "1")}
                    onClick={handleLoginClick}
                  >
                    <Nav.Link href="/login">Login</Nav.Link>
                  </li>
                </>
              )}
              {currEmployee.status === "searching" && (
                <>
                  <li
                    variant="outline-light"
                    style={{
                      backgroundColor: signClicked ? "darkred" : "yellow",
                      borderRadius: "50%",
                      margin: "5px",
                      padding: "10px",
                      opacity: "1",
                      position: "static",
                      transition: "background-color 0.3s ease",
                      clipPath: signClicked
                        ? "polygon(50% 0, 80% 40%, 100% 40%, 85% 60%, 100% 100%, 50% 80%, 0 100%, 15% 60%, 0 40%, 20% 40%)"
                        : "none",
                      transform: signClicked ? "translateY(4px)" : "none",
                    }}
                    onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
                    onMouseLeave={(e) => (e.target.style.opacity = "1")}
                    onClick={handleSignClick}
                  >
                    <Nav.Link href="/signup">Signup</Nav.Link>
                  </li>
                  <li
                    className="zoomAnimation"
                    variant="outline-light"
                    style={{
                      backgroundColor: loginClicked ? "darkred" : "gray",
                      borderRadius: "0 0 50% 50%",
                      margin: "5px",
                      padding: "10px",
                      opacity: "1",
                      transition: "background-color 0.3s ease",
                      clipPath: loginClicked
                        ? "polygon(0 0, 100% 0, 50% 100%)"
                        : "none",
                      transform: loginClicked ? "translateY(4px)" : "none",
                    }}
                    onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
                    onMouseLeave={(e) => (e.target.style.opacity = "1")}
                    onClick={handleLoginClick}
                  >
                    <Nav.Link href="/login">Login</Nav.Link>
                  </li>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
          <div style={{ width: "35%", paddingRight: "10px" }}>
            {/* if user is "found" (signed-in), give option to Logout */}
            {currEmployee.status === "found" && (
              <ul
                className="navbar-nav me-auto mb-2 mb-lg-0"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <li className="nav-item">
                  <span className="nav-link zoomAnimation active text-light fs-4">
                    Welcome back, {currEmployee.data.fname}
                  </span>
                </li>
                <li className="nav-item">
                  <a className="nav-link zoomAnimation active text-light fs-4" onClick={logout}>
                    Logout
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
