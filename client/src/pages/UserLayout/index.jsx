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
      <LinkContainer to="/"><Navbar.Brand id="brand-color"><span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-calendar-heart" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5ZM1 14V4h14v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Zm7-6.507c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
</svg></span> CommunityConnect</Navbar.Brand></LinkContainer>
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