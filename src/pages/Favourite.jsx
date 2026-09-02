import { useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
  const { favorites } = useSelector((state) => state.movies);

  return (
    <Container className="mt-4 align-items-center">
      <h2 className="mb-4 text-center text-white">Your Favorite Movies</h2>

      <Row>
        {favorites.length ? (
          favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p className="text-white text-center">No favorites yet</p>
        )}
      </Row>
    </Container>
  );
};

export default Favorites;