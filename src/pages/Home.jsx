import { Container, Row } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { useMovies } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router-dom";
import "../styles/carousel.css";

const Home = () => {
  const { movies } = useMovies();
  const navigate = useNavigate();

  const topMovies = [...movies]
    .sort((a, b) => b.vote_average - a.vote_average)
    .slice(0, 5);

  return (
    <Container className="mt-4">

      <Carousel className="mb-5" interval={1800}>
        {topMovies.map((movie) => (
          <Carousel.Item key={movie.id}>
            <div
              onClick={() => navigate(`/movie/${movie.id}`)}
              style={{
                height: "500px",
                cursor: "pointer",
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="carousel-overlay d-flex align-items-end p-4">
                <div>
                  <h2>{movie.title}</h2>
                  <p>⭐ {movie.vote_average}</p>
                </div>
              </div>
            </div>

          </Carousel.Item>
        ))}
      </Carousel>

      <Row>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Row>

    </Container>
  );
};

export default Home;





// import { useLoaderData } from "react-router-dom";
// import { Container, Row } from "react-bootstrap";
// import MovieCard from "../components/MovieCard";
// import { useMovies } from "../context/MovieContext";

// const Home = () => {
//   // const movies = useLoaderData();
//   const { movies } = useMovies();

//   return (
//     <Container className="mt-4">
//       <Row>
//         {movies.map((movie) => (
//           <MovieCard key={movie.id} movie={movie} />
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Home;