import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import MovieCard from "../components/MovieCard";

const apiUrl ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
// const apiUrl = "http://localhost:3001/movies";
const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setMovies(data.results));
  }, []);
//   useEffect(() => {
//   fetch(apiUrl)
//     .then(res => res.json())
//     .then(data => setMovies(data));
// }, []);

  return (
    <Container className="mt-4">
      {/* <h2 className="mb-4 text-center">Movies</h2> */}

      <Row>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Row>
    </Container>
  );
};

export default Home;