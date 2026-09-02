import { useState } from "react";
import { useNavigate, useLoaderData, useParams } from "react-router-dom";
import { useMovies } from "../context/MovieContext";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import "../styles/AddEditMovie.css";
import { useDispatch } from "react-redux";
import { addMovie, editMovie, getMovies } from "../redux/slices/moviesFetch";

const GENRES = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Fantasy",
  "Sci-Fi",
  "Animation",
  "Horror",
  "Romance",
  "Thriller",
];

const AddEditMovie = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const existingMovie = useLoaderData();

  // const { addMovie, editMovie } = useMovies();

  //using redux instead of context
  const dispatch = useDispatch();

  const [movie, setMovie] = useState(
    existingMovie
      ? {
        ...existingMovie,
        genres: Array.isArray(existingMovie.genres)
          ? existingMovie.genres.map((g) =>
            typeof g === "string" ? g : g.name
          )
          : [],
      }
      : {
        title: "",
        overview: "",
        poster_path: "",
        backdrop_path: "",
        vote_average: "",
        genres: [],
        release_date: "",
        runtime: "",
        status: "",
        tagline: "",
        language: "",
      }
  );

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedMovie = {
      ...existingMovie,
      ...movie,
      genres: movie.genres.map((g, index) => ({
        id: index,
        name: g,
      })),
    };

    if (id) {
      dispatch(editMovie({ id, movie: formattedMovie }));
      dispatch(getMovies());
      navigate(`/movie/${id}`);
    } else {
      dispatch(addMovie(formattedMovie));
      navigate("/");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5 mb-5">
      <Card className="form-card-glass p-4 shadow-lg">
        <h3 className="text-center mb-4 movie-title-form">
          {id ? "Edit Movie" : "Add Movie"}
        </h3>

        <Form onSubmit={handleSubmit} className="text-white">
          <Row>
            {/* Title */}
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label className="form-label-indigo">Title</Form.Label>
                <Form.Control
                  color="white"
                  className="custom-input"
                  name="title"
                  placeholder="Enter movie title"
                  value={movie.title}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            {/* Tagline */}
            <Form.Group className="mb-3">
              <Form.Label className="form-label-indigo" >Tagline</Form.Label>
              <Form.Control
                className="custom-input"
                name="tagline"
                placeholder="Movie slogan..."
                value={movie.tagline}
                onChange={handleChange}
              />
            </Form.Group>
            {/* Poster & Backdrop*/}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="form-label-indigo">Poster Path</Form.Label>
                <Form.Control
                  // color="white"

                  className="custom-input "
                  name="poster_path"
                  placeholder="/path.jpg"
                  value={movie.poster_path}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="form-label-indigo">Backdrop Path</Form.Label>
                <Form.Control
                  className="custom-input"
                  name="backdrop_path"
                  placeholder="/background.jpg"
                  value={movie.backdrop_path}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            {/* Rating & Runtime */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="form-label-indigo">Rating (0-10)</Form.Label>
                <Form.Control
                  className="custom-input"
                  name="vote_average"
                  type="number"
                  step="0.1"
                  value={movie.vote_average}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="form-label-indigo">Runtime (Min)</Form.Label>
                <Form.Control
                  className="custom-input"
                  type="number"
                  name="runtime"
                  value={movie.runtime}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            {/* Release Date */}
            <Col md={6}>

              <Form.Group className="mb-3">
                <Form.Label className="form-label-indigo" >Release Date</Form.Label>
                <Form.Control
                  className="custom-input"

                  type="date"
                  name="release_date"
                  value={movie.release_date}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>

              {/* Language */}
              <Form.Group className="mb-3">
                <Form.Label className="form-label-indigo" >Language</Form.Label>
                <Form.Control
                  className="custom-input"
                  name="language"
                  placeholder="en"
                  value={movie.language}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Genres */}
          <Form.Group className="mb-4">
            <Form.Label className="form-label-indigo">Genres</Form.Label>
            <div className="d-flex flex-wrap gap-2 genre-checkbox-group">
              {GENRES.map((genre) => (
                <div key={genre} className="custom-checkbox-wrapper">
                  <input
                    type="checkbox"
                    id={`genre-${genre}`}
                    checked={movie.genres.includes(genre)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setMovie({ ...movie, genres: [...movie.genres, genre] });
                      } else {
                        setMovie({ ...movie, genres: movie.genres.filter((g) => g !== genre) });
                      }
                    }}
                  />
                  <label htmlFor={`genre-${genre}`}>{genre}</label>
                </div>
              ))}
            </div>
          </Form.Group>

          {/* Overview */}
          <Form.Group className="mb-4">
            <Form.Label className="form-label-indigo">Overview</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              className="custom-input"
              name="overview"
              value={movie.overview}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Submit Button */}
          <Button type="submit" className="btn-custom btn-edit w-100 py-3 mt-2">
            {id ? "Update Movie" : "Add New Movie"}
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default AddEditMovie;
