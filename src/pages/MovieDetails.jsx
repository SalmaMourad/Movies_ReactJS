import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import "../styles/MovieDetails.css";

const imgPath = "https://image.tmdb.org/t/p/w500/";
const bgPath = "https://image.tmdb.org/t/p/original/";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9813ce01a72ca1bd2ae25f091898b1c7`)
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [id]);

  if (!movie) return <h2 className="text-center mt-5">Loading...</h2>;

  return (
    <div
      className="details-page"
      style={{
        backgroundImage: `url(${bgPath + movie.backdrop_path})`,
      }}
    >
      <div className="overlay">
        <Container className="py-5">
          <Row className="align-items-center">

            {/* Poster */}
            <Col md={4} className="text-center mb-4">
              <img
                src={imgPath + movie.poster_path}
                className="poster-img"
              />
            </Col>

            {/* Info */}
            <Col md={8}>
              <h1 className="movie-title">{movie.title}</h1>

              <p className="rating">
                ⭐ {movie.vote_average}
              </p>

              <p className="overview">{movie.overview}</p>

              {/* Genres */}
              <div className="mt-3">
                {movie.genres?.map((g) => (
                  <Badge bg="warning" text="dark" className="me-2" key={g.id}>
                    {g.name}
                  </Badge>
                ))}
              </div>

            </Col>

          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MovieDetails;















// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";

// const imgPath = "https://image.tmdb.org/t/p/w500/";

// const MovieDetails = () => {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9813ce01a72ca1bd2ae25f091898b1c7`)
//       .then(res => res.json())
//       .then(data => setMovie(data));
//   }, [id]);

//   if (!movie) return <h2 className="text-center mt-5">Loading...</h2>;

//   return (
//     <Container className="mt-5">
//       <Row>
//         <Col md={4}>
//           <img
//             src={imgPath + movie.poster_path}
//             className="img-fluid rounded shadow"
//           />
//         </Col>

//         <Col md={8}>
//           <h2>{movie.title}</h2>
//           <p>{movie.overview}</p>
//           <p className="text-warning">⭐ {movie.vote_average}</p>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default MovieDetails;
// // import { useParams } from "react-router-dom";
// // import { useEffect, useState } from "react";
// // import { Container } from "react-bootstrap";

// // const apiKey = "api_key=9813ce01a72ca1bd2ae25f091898b1c7";
// // const imgPath = "https://image.tmdb.org/t/p/w500/";

// // const MovieDetails = () => {
// //   const { id } = useParams();
// //   const [movie, setMovie] = useState(null);

// //   useEffect(() => {
// //     fetch(`https://api.themoviedb.org/3/movie/${id}?${apiKey}`)
// //       .then(res => res.json())
// //       .then(data => setMovie(data));
// //   }, [id]);

// //   if (!movie) return <h2>Loading...</h2>;

// //   return (
// //     <Container className="mt-4">
// //       <h2>{movie.title}</h2>
// //       <img src={imgPath + movie.poster_path} width="300" />
// //       <p>{movie.overview}</p>
// //       <p>⭐ Rating: {movie.vote_average}</p>
// //     </Container>
// //   );
// // };

// // export default MovieDetails;