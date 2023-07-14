import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import UserNav from "../../components/UserNav";
import UpdateProfile from "../../components/UpdateProfile";
import NewEventModal from "../../components/NewEventModal";

function UserLayout (userDetails) {

  const user = userDetails.user;
  const logout = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
  }
    return(
        <>
        <Navbar expand="lg" sticky="top" id="user-nav-bar">
      <Container>
      <LinkContainer to="/"><Navbar.Brand>Community Calendar</Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <LinkContainer to="/community-calendar"><Nav.Link>Calendar</Nav.Link></LinkContainer>
          <LinkContainer to="/"><Nav.Link>Upcoming</Nav.Link></LinkContainer>
          <Nav.Link><NewEventModal /></Nav.Link>
              <NavDropdown.Divider />
            <NavDropdown title="Account" id="basic-nav-dropdown">
            <NavDropdown.Item><NewEventModal /></NavDropdown.Item>
            <NavDropdown.Item><UpdateProfile /></NavDropdown.Item>
            <LinkContainer to="/your-events"><NavDropdown.Item>Manage Events</NavDropdown.Item></LinkContainer>
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
        <div className="container">
          <div className="row">
            <div className="col-8" style={{ height: '90vh', overflow: 'scroll'}}>
      <Outlet />
      </div>
      <div className="col-4">
        <UserNav />

      </div>
      </div>
      </div>
      </div>
        </>
    );
}

export default UserLayout;