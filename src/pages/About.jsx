import { Container } from "react-bootstrap";

const About = () => {
  return (
    <Container className="mt-4">
      <h2 style={{ color: "white" }}>About Page</h2>
      <p style={{ color: "white" }}>
        This is a movie app built with React. It allows users to browse and manage their favorite movies. The app uses the TMDB API to fetch movie data and provides features like adding, editing, and deleting movies from the list.
      </p>
      <p style={{ color: "white" }}>
        The app is designed to be responsive and user-friendly, making it easy for users to navigate and find information about their favorite movies.
      </p>
    </Container>
  );
};

export default About;
