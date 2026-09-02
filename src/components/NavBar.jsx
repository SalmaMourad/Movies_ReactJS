import { Navbar, Nav, Container, Badge, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../index.css";
import { searchMovie } from "../redux/slices/moviesFetch";


const NavBar = () => {
  const { favorites } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

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
          <Form className="mx-auto w-50">
            <div className="search-container">
              <Form.Control
                type="search"
                placeholder="Find specific movie..."
                className="custom-search rounded-pill py-2"
                onChange={(e) => dispatch(searchMovie(e.target.value))}
              />
            </div>
          </Form>
          <Nav className="ms-auto">

            <Nav.Link as={NavLink} to="/" className="mx-2">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/favorites" className="mx-2">
              Favorites

              <Badge
                pill
                bg=""
                className="fav-badge-glow ms-2 d-inline-flex align-items-center justify-content-center"
              >
                {favorites.length}
              </Badge>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/add" className="mx-2">
              Add Movie
            </Nav.Link>
            <Nav.Link as={NavLink} to="/auth" className="mx-2">
              Login
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="mx-2">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;