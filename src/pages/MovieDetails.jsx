import { useLoaderData, useNavigate } from "react-router-dom";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
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
      {/* movie poster */}
      <div className="overlay">
        <Container className="py-5">
          <Row className="align-items-center">
            {/* Poster */}
            <Col md={4} className="text-center mb-4">
              <img
                src={
                  movie.poster_path
                    ? imgPath + movie.poster_path
                    : "https://via.placeholder.com/500x750"
                }
                className="poster-img img-fluid rounded"
                alt={movie.title}
              />
            </Col>

            {/* Title and Year Group */}
            <Col md={8}>
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                <div className="d-flex align-items-baseline gap-3 flex-grow-1">
                  <h1 className="movie-title mb-0">{movie.title}</h1>
                  <span className="release-year">
                    {movie.release_date?.split('-')[0]}
                  </span>
                </div>

                {/*Edit and Delete Buttons Group */}
                <div className="d-flex gap-3">
                  <button
                    className="btn-custom btn-edit"
                    onClick={() => navigate(`/edit/${movie.id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn-custom btn-delete"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* Tagline */}
              {movie.tagline && (
                <p className="mb-4" style={{
                  color: '#ffffff',
                  // 3f51b5
                  fontSize: '1.1rem',
                  fontStyle: 'italic',
                  borderLeft: '4px solid #3f51b5',
                  paddingLeft: '15px',
                  opacity: 0.8
                }}>
                  “{movie.tagline}”
                </p>
              )}

              {/* Overview */}
              <div className="d-flex align-items-center mb-3">
                <span className="fw-bold text-uppercase small tracking-wider" style={{ color: '#818cf8', letterSpacing: '1px' }}>
                  Movie Description
                </span>
                <div className="ms-3 flex-grow-1" style={{ height: '1px', background: 'linear-gradient(to right, #818cf8, transparent)' }}></div>
              </div>
              <p className="overview mt-3">
                {movie.overview || "No description available for this movie right now."}
              </p>

              {/* Genres Section */}
              <div className="mt-4">
                {/* Category Header with Line */}
                <div className="d-flex align-items-center mb-3">
                  <span className="fw-bold text-uppercase small tracking-wider" style={{ color: '#818cf8', letterSpacing: '1px' }}>
                    Category
                  </span>
                  <div className="ms-3 flex-grow-1" style={{ height: '1px', background: 'linear-gradient(to right, #818cf8, transparent)' }}></div>
                </div>

                {/* Genre Badges */}
                <div className="d-flex flex-wrap gap-2">
                  {movie.genres?.map((g, index) => (
                    <span key={index} className="genre-badge">
                      {typeof g === "string" ? g : g.name}
                    </span>
                  ))}
                </div>
              </div>
              {/* Extra Information Section */}
              <br></br>
              <div className="d-flex align-items-center mb-3">
                <span className="fw-bold text-uppercase small tracking-wider" style={{ color: '#818cf8', letterSpacing: '1px' }}>
                  Extra Information
                </span>
                <div className="ms-3 flex-grow-1" style={{ height: '1px', background: 'linear-gradient(to right, #818cf8, transparent)' }}></div>
              </div>
              <Row className="mt-1 g-2">
                {[
                  { label: "Rating", value: movie.vote_average || "N/A", },
                  { label: "Language", value: movie.original_language?.toUpperCase() || "EN", },
                  { label: "Runtime", value: `${movie.runtime || "N/A"} min`, },
                  // { label: "Release", value: movie.release_date?.split('-')[0] || "N/A", },
                  // { label: "Status", value: movie.status || "N/A",  },
                  { label: "Budget", value: movie.budget > 0 ? `$${(movie.budget / 1000000).toFixed(1)}M` : "TBA", },
                ].map((item, index) => (
                  <Col xs={6} sm={4} md={2} key={index}>
                    <div className="stat-card">
                      <span className="stat-icon">{item.icon}</span>
                      <small className="stat-label">{item.label}</small>
                      <strong className="stat-value">{item.value}</strong>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default MovieDetails;