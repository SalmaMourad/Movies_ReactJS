import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./movieCard.css";

const imgPath = "https://image.tmdb.org/t/p/w500/";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <Col md={3} sm={6} xs={12} className="mb-4">
      <Card
        className="movie-card h-100"
        onClick={() => navigate(`/movie/${movie.id}`)}
      >
        <Card.Img
          variant="top"
          src={
            movie.poster_path
              ? imgPath + movie.poster_path
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          className="movie-img"
        />

        <Card.Body>
          <Card.Title className="card-title-text">
            {movie.title}
          </Card.Title>

          <Card.Text className="movie-rating">
            ⭐ {movie.vote_average}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MovieCard;