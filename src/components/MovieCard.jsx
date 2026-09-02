import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./movieCard.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/slices/moviesFetch";

const imgPath = "https://image.tmdb.org/t/p/w500/";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector(state => state.movies)
  const isFav = favorites.some((m) => m.id === movie.id);

  const navigate = useNavigate();

  return (
    <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
      <Card className="movie-card-glass h-100" onClick={() => navigate(`/movie/${movie.id}`)}>
        <div className="poster-wrapper">
          <Card.Img
            variant="top"
            src={movie.poster_path ? imgPath + movie.poster_path : "https://via.placeholder.com/500x750?text=No+Image"}
            className="card-img-custom"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch(toggleFavorite(movie));
            }}
            className={`fav-btn-glass ${isFav ? 'active' : ''}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={isFav ? "#818cf8" : "none"}
              stroke={isFav ? "#818cf8" : "rgba(255,255,255,0.6)"}
              strokeWidth="2"
              className="heart-icon"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001z" />
            </svg>
          </button>
        </div>

        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title className="movie-card-title">
            {movie.title}
          </Card.Title>

          <div className="d-flex justify-content-between align-items-center mt-2">
            <span className="movie-card-rating">⭐ {movie.vote_average}</span>
            <span className="movie-card-year">{movie.release_date?.split('-')[0]}</span>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MovieCard;