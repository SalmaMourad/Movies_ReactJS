import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <Container className="mt-5 py-5 text-white">
      <div className="text-left mb-5">
        <h1 className="display-6 fw-bold">About <span style={{ color: '#818cf8' }}>Project</span>Movies</h1>
        <p className="lead text-secondary">Bringing the magic of using react.</p>
      </div>
      <Row className="align-items-center">
        <Col md={6}>
          <h3>Project Story</h3>
          <p>
            Project Movies started as a simple idea: to create a seamless way for users
            to interact with their favorite films. Built using React, React-Bootstrap, Context Api, Redux, Routing, fetch methods, JSON Data, JSON Server and Material-ui-design
            this platform showcases the intersection of modern web technology and a
            passion for storytelling.
          </p>
        </Col>
        <Col md={6} className="text-center">
          <div style={{ fontSize: '100px', opacity: 0.5 }}>🎬</div>
        </Col>
      </Row>
    </Container>
  );
};
export default About;
