import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container>

        <Navbar.Brand as={NavLink} to="/" className="fw-bold">
          Movies
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

            <Nav.Link as={NavLink} to="/contact" className="mx-2">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};
export default NavBar;