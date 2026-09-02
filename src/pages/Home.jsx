import { Container, Row } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { useMovies } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router-dom";
import "../styles/carousel.css";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, searchMovie } from "../redux/slices/moviesFetch";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();

  const { movies, filteredMovies, isLoading, error, isSearching } =
    useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const navigate = useNavigate();

  const topMovies = movies?.length
    ? [...movies]
      .sort((a, b) => b.vote_average - a.vote_average)
      .slice(0, 5)
    : [];
  console.log("movies:", movies);
  console.log("filtered:", filteredMovies);
  console.log("isSearching:", isSearching);
  return (
    <>
      {/* Carousel */}
      {!isSearching && (
        <Carousel controls={false} indicators={true} interval={1300}>
          {topMovies.map((movie) => (
            <Carousel.Item key={movie.id}>
              <div
                className="hero-slide"
                onClick={() => navigate(`/movie/${movie.id}`)}
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
                }}
              >
                <div className="hero-overlay">
                  <div className="hero-content">
                    <h1>{movie.title}</h1>

                    <p className="hero-rating">
                      ⭐ {movie.vote_average}
                    </p>

                    <p className="hero-overview">
                      {movie.overview}
                    </p>

                    <button
                      className="hero-btn btn-custom btn-edit w-50 py-3 mt-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/movie/${movie.id}`);
                      }}
                    >
                      Watch Trailer
                    </button>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

      )}

      {/*Movies */}
      <Container className="mt-4">
        <Row>
          {isLoading ? (
            <p className="text-white text-center">Loading...</p>
          ) : filteredMovies.length ? (
            filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          ) : (
            <p className="text-white text-center">No movies found</p>
          )}
        </Row>
      </Container>
    </>
  );
};
export default Home;