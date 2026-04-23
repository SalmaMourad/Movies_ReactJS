import { useState } from "react";
import { useNavigate, useLoaderData, useParams } from "react-router-dom";
import { useMovies } from "../context/MovieContext";
import { Container, Form, Button, Card } from "react-bootstrap";

const AddEditMovie = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const existingMovie = useLoaderData();

  const { addMovie, editMovie } = useMovies();

  const [movie, setMovie] = useState(
    existingMovie || {
      title: "",
      overview: "",
      poster_path: "",
      backdrop_path: "",
      vote_average: "",
      genres: [],
    }
  );

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (id) {
      await editMovie(id, movie);
    } else {
      await addMovie(movie);
    }

    navigate(`/movie/${id}`);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Card className="p-4 shadow-lg" style={{ width: "500px" }}>
        <h3 className="text-center mb-4">
          {id ? "Edit Movie" : "Add Movie"}
        </h3>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              placeholder="Enter movie title"
              value={movie.title}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Poster URL</Form.Label>
            <Form.Control
              name="poster_path"
              placeholder="/path.jpg"
              value={movie.poster_path}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Backdrop URL</Form.Label>
            <Form.Control
              name="backdrop_path"
              placeholder="/background.jpg"
              value={movie.backdrop_path}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              name="vote_average"
              type="number"
              placeholder="0 - 10"
              value={movie.vote_average}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Overview</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="overview"
              placeholder="Movie description..."
              value={movie.overview}
              onChange={handleChange}
            />
          </Form.Group>
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }}
            />
          )}
          <Button variant="dark" type="submit" className="w-100">
            {id ? "Update Movie" : "Add Movie"}
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default AddEditMovie;