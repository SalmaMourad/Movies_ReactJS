import { useState } from "react";
import { useNavigate, useLoaderData, useParams } from "react-router-dom";
import { useMovies } from "../context/MovieContext";
import { Container, Form, Button, Card } from "react-bootstrap";

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

  const { addMovie, editMovie } = useMovies();

  // ✅ FIX: normalize genres (object → string)
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

  // ✅ handle input change
  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  // ✅ handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔥 FIX: convert genres → objects before saving
    const formattedMovie = {
      ...movie,
      genres: movie.genres.map((g, index) => ({
        id: index,
        name: g,
      })),
    };

    if (id) {
      await editMovie(id, formattedMovie);
      navigate(`/movie/${id}`);
    } else {
      await addMovie(formattedMovie);
      navigate("/");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Card className="p-4 shadow-lg" style={{ width: "500px" }}>
        <h3 className="text-center mb-4">
          {id ? "Edit Movie" : "Add Movie"}
        </h3>

        <Form onSubmit={handleSubmit}>
          {/* Title */}
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              placeholder="Enter movie title"
              value={movie.title}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Poster */}
          <Form.Group className="mb-3">
            <Form.Label>Poster URL</Form.Label>
            <Form.Control
              name="poster_path"
              placeholder="/path.jpg"
              value={movie.poster_path}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Backdrop */}
          <Form.Group className="mb-3">
            <Form.Label>Backdrop URL</Form.Label>
            <Form.Control
              name="backdrop_path"
              placeholder="/background.jpg"
              value={movie.backdrop_path}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Rating */}
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

          {/* Release Date */}
          <Form.Group className="mb-3">
            <Form.Label>Release Date</Form.Label>
            <Form.Control
              type="date"
              name="release_date"
              value={movie.release_date}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Runtime */}
          <Form.Group className="mb-3">
            <Form.Label>Runtime (minutes)</Form.Label>
            <Form.Control
              type="number"
              name="runtime"
              placeholder="120"
              value={movie.runtime}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Status */}
          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select
              name="status"
              value={movie.status}
              onChange={handleChange}
            >
              <option value="">Select status</option>
              <option value="Released">Released</option>
              <option value="Upcoming">Upcoming</option>
            </Form.Select>
          </Form.Group>

          {/* Tagline */}
          <Form.Group className="mb-3">
            <Form.Label>Tagline</Form.Label>
            <Form.Control
              name="tagline"
              placeholder="Movie slogan..."
              value={movie.tagline}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Language */}
          <Form.Group className="mb-3">
            <Form.Label>Language</Form.Label>
            <Form.Control
              name="language"
              placeholder="en"
              value={movie.language}
              onChange={handleChange}
            />
          </Form.Group>

          {/* 🔥 Genres (checkboxes) */}
          <Form.Group className="mb-3">
            <Form.Label>Genres</Form.Label>

            <div className="d-flex flex-wrap gap-2">
              {GENRES.map((genre) => (
                <Form.Check
                  key={genre}
                  type="checkbox"
                  label={genre}
                  checked={movie.genres.includes(genre)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setMovie({
                        ...movie,
                        genres: [...movie.genres, genre],
                      });
                    } else {
                      setMovie({
                        ...movie,
                        genres: movie.genres.filter((g) => g !== genre),
                      });
                    }
                  }}
                />
              ))}
            </div>
          </Form.Group>

          {/* Overview */}
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

          {/* Preview */}
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
              alt="preview"
            />
          )}

          {/* Submit */}
          <Button variant="dark" type="submit" className="w-100">
            {id ? "Update Movie" : "Add Movie"}
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default AddEditMovie;
// import { useState } from "react";
// import { useNavigate, useLoaderData, useParams } from "react-router-dom";
// import { useMovies } from "../context/MovieContext";
// import { Container, Form, Button, Card } from "react-bootstrap";

// const AddEditMovie = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const existingMovie = useLoaderData();

//   const { addMovie, editMovie } = useMovies();
//   const [movie, setMovie] = useState(
//     existingMovie || {
//       title: "",
//       overview: "",
//       poster_path: "",
//       backdrop_path: "",
//       vote_average: "",
//       genres: [],
//       release_date: "",
//       runtime: "",
//       status: "",
//       tagline: "",
//       language: "",
//     }
//   );
//   const GENRES = [
//     "Action",
//     "Adventure",
//     "Comedy",
//     "Drama",
//     "Fantasy",
//     "Sci-Fi",
//     "Animation",
//     "Horror",
//     "Romance",
//     "Thriller",
//   ];
//   const handleChange = (e) => {
//     setMovie({ ...movie, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (id) {
//       await editMovie(id, movie);
//     } else {
//       await addMovie(movie);
//     }

//     // navigate(`/movie/${id}`);
//     if (id) {
//       navigate(`/movie/${id}`);
//     } else {
//       navigate("/");
//     }
//   };

//   return (
//     <Container className="d-flex justify-content-center align-items-center mt-5">
//       <Card className="p-4 shadow-lg" style={{ width: "500px" }}>
//         <h3 className="text-center mb-4">
//           {id ? "Edit Movie" : "Add Movie"}
//         </h3>

//         <Form onSubmit={handleSubmit}>
//           <Form.Group className="mb-3">
//             <Form.Label>Title</Form.Label>
//             <Form.Control
//               name="title"
//               placeholder="Enter movie title"
//               value={movie.title}
//               onChange={handleChange}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Poster URL</Form.Label>
//             <Form.Control
//               name="poster_path"
//               placeholder="/path.jpg"
//               value={movie.poster_path}
//               onChange={handleChange}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Backdrop URL</Form.Label>
//             <Form.Control
//               name="backdrop_path"
//               placeholder="/background.jpg"
//               value={movie.backdrop_path}
//               onChange={handleChange}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Rating</Form.Label>
//             <Form.Control
//               name="vote_average"
//               type="number"
//               placeholder="0 - 10"
//               value={movie.vote_average}
//               onChange={handleChange}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Release Date</Form.Label>
//             <Form.Control
//               type="date"
//               name="release_date"
//               value={movie.release_date}
//               onChange={handleChange}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Runtime (minutes)</Form.Label>
//             <Form.Control
//               type="number"
//               name="runtime"
//               placeholder="120"
//               value={movie.runtime}
//               onChange={handleChange}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Status</Form.Label>
//             <Form.Select
//               name="status"
//               value={movie.status}
//               onChange={handleChange}
//             >
//               <option value="">Select status</option>
//               <option value="Released">Released</option>
//               <option value="Upcoming">Upcoming</option>
//             </Form.Select>
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Tagline</Form.Label>
//             <Form.Control
//               name="tagline"
//               placeholder="Movie slogan..."
//               value={movie.tagline}
//               onChange={handleChange}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Language</Form.Label>
//             <Form.Control
//               name="language"
//               placeholder="en"
//               value={movie.language}
//               onChange={handleChange}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Genres</Form.Label>
//             <div className="d-flex flex-wrap gap-2">

//               {GENRES.map((genre) => (
//                 <Form.Check
//                   key={genre}
//                   type="checkbox"
//                   label={genre}
//                   checked={movie.genres.includes(genre)}
//                   onChange={(e) => {
//                     if (e.target.checked) {
//                       setMovie({
//                         ...movie,
//                         genres: [...movie.genres, genre],
//                       });
//                     } else {
//                       setMovie({
//                         ...movie,
//                         genres: movie.genres.filter((g) => g !== genre),
//                       });
//                     }
//                   }}
//                 />
//               ))}
//             </div>
//           </Form.Group>
          
//           <Form.Group className="mb-3">
//             <Form.Label>Overview</Form.Label>
//             <Form.Control
//               as="textarea"
//               rows={3}
//               name="overview"
//               placeholder="Movie description..."
//               value={movie.overview}
//               onChange={handleChange}
//             />
//           </Form.Group>

//           {movie.poster_path && (
//             <img
//               src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
//               style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }}
//             />
//           )}
//           <Button variant="dark" type="submit" className="w-100">
//             {id ? "Update Movie" : "Add Movie"}
//           </Button>
//         </Form>
//       </Card>
//     </Container>
//   );
// };

// export default AddEditMovie;