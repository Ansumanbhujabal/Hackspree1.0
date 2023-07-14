import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function Layout () {
    return(
        <>
        <Navbar expand="lg" id="nav-bar" sticky="top">
      <Container>
      <LinkContainer to="/"><Navbar.Brand>Community Calendar</Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <LinkContainer to="/community-calendar"><Nav.Link>Calendar</Nav.Link></LinkContainer>
            <NavDropdown title="Sign In" id="basic-nav-dropdown">
            <LinkContainer to="/login"><NavDropdown.Item>Sign In</NavDropdown.Item></LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/signup"><NavDropdown.Item>
                Sign Up
              </NavDropdown.Item></LinkContainer>
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

export default Layout;