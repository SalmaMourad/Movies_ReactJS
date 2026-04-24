import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm" fixed="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold">
          <span style={{ color: '#818cf8', textShadow: '0 0 10px rgba(129, 140, 248, 0.5)' }}>
            Project
          </span>
          <span style={{ color: 'white' }}>Movies</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">

            <Nav.Link as={NavLink} to="/" className="mx-2">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/add" className="mx-2">
              Add Movie
            </Nav.Link>

            <Nav.Link as={NavLink} to="/about" className="mx-2">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/auth" className="mx-2">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;