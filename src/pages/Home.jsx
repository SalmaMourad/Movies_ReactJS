import { useLoaderData } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import MovieCard from "../components/MovieCard";
import { useMovies } from "../context/MovieContext";

const Home = () => {
  // const movies = useLoaderData();
  const { movies } = useMovies();

  return (
    <Container className="mt-4">
      <Row>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Row>
    </Container>
  );
};

export default Home;