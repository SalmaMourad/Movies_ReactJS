import { useLoaderData, useNavigate } from "react-router-dom";
import { Container, Row, Col, Badge } from "react-bootstrap";
import "../styles/MovieDetails.css";
import { useMovies } from "../context/MovieContext";

const imgPath = "https://image.tmdb.org/t/p/w500/";
const bgPath = "https://image.tmdb.org/t/p/original/";

const MovieDetails = () => {

  const movie = useLoaderData();
  const navigate = useNavigate();
  const { removeMovie } = useMovies();

  const handleDelete = async () => {
    await removeMovie(movie.id);
    navigate("/");
  };
  if (!movie) return <h2 className="text-center mt-5">Loading...</h2>;

  return (
    <div
      className="details-page"
      style={{
        backgroundImage: movie.backdrop_path
          ? `url(${bgPath + movie.backdrop_path})`
          : "none",
      }}
    >
      <div className="overlay">
        <Container className="py-5">
          <Row className="align-items-center">

            <Col md={4} className="text-center mb-4">
              <img
                src={
                  movie.poster_path
                    ? imgPath + movie.poster_path
                    : "https://via.placeholder.com/500x750"
                }
                className="poster-img"
                alt={movie.title}
              />
            </Col>

            <Col md={8}>
              <h1 className="movie-title">{movie.title}</h1>

              <p className="rating">⭐ {movie.vote_average}</p>

              <p className="overview">{movie.overview}</p>

              <div className="mt-3">
                {movie.genres?.map((g) => (
                  <Badge key={g.id} bg="warning" text="dark" className="me-2">
                    {g.name}
                  </Badge>
                ))}

                {/* Buttons */}
                <div className="mt-4">
                  <button
                    onClick={() => navigate(`/edit/${movie.id}`)}
                    className="btn btn-success me-2"
                  >
                    Edit
                  </button>

                  <button
                    onClick={handleDelete}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MovieDetails;