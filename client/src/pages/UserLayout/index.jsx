import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function UserLayout (userDetails) {

  const user = userDetails.user;
  const logout = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
  }
    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
      <LinkContainer to="/"><Navbar.Brand>Community Calendar</Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <LinkContainer to="/community-calendar"><Nav.Link>Calendar</Nav.Link></LinkContainer>
            <NavDropdown title="Sign In" id="basic-nav-dropdown">
            <NavDropdown.Item>Create Event</NavDropdown.Item>
            <NavDropdown.Item>Update Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logout}>
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <div className="App-header">
      <Outlet />
      </div>
        </>
    );
}

export default UserLayout;