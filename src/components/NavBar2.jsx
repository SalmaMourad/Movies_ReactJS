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











// import { Navbar, Nav, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Container>

//         {/* Logo / Title */}
//         <Navbar.Brand as={Link} to="/">
//           🎬 Movie App
//         </Navbar.Brand>

//         {/* Mobile toggle */}
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />

//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">

//             {/* Home */}
//             <Nav.Link as={Link} to="/">
//               Home
//             </Nav.Link>

//             {/* About */}
//             <Nav.Link as={Link} to="/about">
//               About
//             </Nav.Link>

//           </Nav>
//         </Navbar.Collapse>

//       </Container>
//     </Navbar>
//   );
// };

// export default NavBar;