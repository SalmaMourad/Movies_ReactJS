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
                className="poster-img"
                alt={movie.title}
              />
            </Col>

            {/* Info */}
            <Col md={8}>
              <h1 className="movie-title">{movie.title}</h1>

              {/* Tagline
              {movie.tagline && (
                <p className="tagline">“{movie.tagline}”</p>
              )}

              <Row className="mt-4 g-3">

                <Col xs={6} md={3}>
                  <div className="bg-primary text-white p-1 rounded text-center small shadow-sm">
                    <small className="d-block">Rating</small>
                    <strong>⭐ {movie.vote_average || "N/A"}</strong>
                  </div>
                </Col>

                <Col xs={6} md={3}>
                  <div className="bg-primary text-white p-1 rounded text-center small shadow-sm">
                    <small className="d-block">Runtime</small>
                    <strong>⏱ {movie.runtime || "N/A"} min</strong>
                  </div>
                </Col>

                <Col xs={6} md={3}>
                  <div className="bg-primary text-white p-1 rounded text-center small shadow-sm">
                    <small className="d-block">Release</small>
                    <strong>📅 {movie.release_date || "N/A"}</strong>
                  </div>
                </Col>

                <Col xs={6} md={3}>
                  <div className="bg-primary text-white p-1 rounded text-center small shadow-sm">
                    <small className="d-block">Status</small>
                    <strong>{movie.status || "N/A"}</strong>
                  </div>
                </Col>

                <Col xs={6} md={3}>
                  <div className="bg-primary text-white p-1 rounded text-center small shadow-sm">
                    <small className="d-block">Language</small>
                    <strong>{movie.language || "EN"}</strong>
                  </div>
                </Col>

              </Row> */}





              {/* <Row className="mt-4 g-3">

                <Col md={6}>
                  <div className="info-card">
                    <small>⭐ Rating</small>
                    <h6>{movie.vote_average || "N/A"}</h6>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="info-card">
                    <small>⏱ Runtime</small>
                    <h6>{movie.runtime || "N/A"} min</h6>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="info-card">
                    <small>📅 Release Date</small>
                    <h6>{movie.release_date || "N/A"}</h6>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="info-card">
                    <small>🎬 Status</small>
                    <h6>{movie.status || "N/A"}</h6>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="info-card">
                    <small>🌍 Language</small>
                    <h6>{movie.language || "EN"}</h6>
                  </div>
                </Col>

              </Row> */}
              {/* <div className="d-flex flex-wrap gap-2 mt-3">

                <span className="badge bg-warning text-dark">⭐ {movie.vote_average}</span>
                <span className="badge bg-info">⏱ {movie.runtime} min</span>
                <span className="badge bg-secondary">📅 {movie.release_date}</span>
                <span className="badge bg-success">{movie.status}</span>
                <span className="badge bg-primary">{movie.language}</span>
              </div> */}

              {/* Overview */}
              <p className="overview mt-3">
                {movie.overview || "No description available."}
              </p>

              {/* Genres */}
              <div className="mt-3">
                {movie.genres?.map((g, index) => (
                  <Badge
                    key={index}
                    bg="warning"
                    text="dark"
                    className="me-2 px-3 py-2"
                  >
                    {typeof g === "string" ? g : g.name}
                  </Badge>
                ))}
              </div>

              {/* Tagline */}
{movie.tagline && (
  <p className="mb-4" style={{ 
    color: '#3f51b5', 
    fontSize: '1.1rem', 
    fontStyle: 'italic', 
    borderLeft: '4px solid #3f51b5', 
    paddingLeft: '15px',
    opacity: 0.8
  }}>
    “{movie.tagline}”
  </p>
)}

<Row className="mt-4 g-3">
  {[
    { label: "Rating", value: movie.vote_average, icon: "⭐", suffix: "/10" },
    { label: "Runtime", value: movie.runtime, icon: "⏱", suffix: " min" },
    { label: "Release", value: movie.release_date, icon: "📅" },
    { label: "Status", value: movie.status, icon: "🏷️" },
    { label: "Language", value: movie.original_language?.toUpperCase(), icon: "🌐" },
  ].map((item, index) => (
    <Col xs={6} md={4} lg={2.4} key={index}>
      <div 
        className="h-100 p-3 rounded-4 shadow-sm border-0" 
        style={{ 
          background: 'linear-gradient(145deg, #ffffff, #f0f2f9)',
          borderBottom: '3px solid #3f51b5',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transition: 'transform 0.2s'
        }}
      >
        <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#7986cb', textTransform: 'uppercase', letterSpacing: '1px' }}>
          {item.label}
        </span>
        <div className="mt-1" style={{ color: '#1a237e', fontSize: '1rem' }}>
          <span className="me-1">{item.icon}</span>
          <strong>{item.value || "N/A"}{item.suffix}</strong>
        </div>
      </div>
    </Col>
  ))}
</Row>
              {/* Tagline */}
              {movie.tagline && (
                <p className="tagline" style={{ color: '#3f51b5', fontStyle: 'italic', fontWeight: '500' }}>
                  “{movie.tagline}”
                </p>
              )}

              <Row className="mt-4 g-3">
                {[
                  { label: "Rating", value: `⭐ ${movie.vote_average || "N/A"}` },
                  { label: "Runtime", value: `⏱ ${movie.runtime || "N/A"} min` },
                  { label: "Release", value: `📅 ${movie.release_date || "N/A"}` },
                  { label: "Status", value: movie.status || "N/A" },
                  { label: "Language", value: movie.original_language?.toUpperCase() || "EN" },
                ].map((item, index) => (
                  <Col xs={6} md={3} key={index}>
                    <div
                      className="text-white p-2 rounded text-center small shadow-sm"
                      style={{ backgroundColor: '#3f51b5' }} // MUI Indigo 500
                    >
                      <small className="d-block" style={{ opacity: 0.9 }}>{item.label}</small>
                      <strong>{item.value}</strong>
                    </div>
                  </Col>
                ))}
              </Row>
              {/* Buttons */}
              <div className="mt-4 d-flex gap-3">
                <Button
                  variant="success"
                  onClick={() => navigate(`/edit/${movie.id}`)}
                >
                  ✏️ Edit
                </Button>

                <Button variant="danger" onClick={handleDelete}>
                  🗑 Delete
                </Button>
              </div>
            </Col>

          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MovieDetails;
// import { useLoaderData, useNavigate } from "react-router-dom";
// import { Container, Row, Col, Badge } from "react-bootstrap";
// import "../styles/MovieDetails.css";
// import { useMovies } from "../context/MovieContext";

// const imgPath = "https://image.tmdb.org/t/p/w500/";
// const bgPath = "https://image.tmdb.org/t/p/original/";

// const MovieDetails = () => {

//   const movie = useLoaderData();
//   const navigate = useNavigate();
//   const { removeMovie } = useMovies();

//   const handleDelete = async () => {
//     await removeMovie(movie.id);
//     navigate("/");
//   };
//   if (!movie) return <h2 className="text-center mt-5">Loading...</h2>;

//   return (
//     <div
//       className="details-page"
//       style={{
//         backgroundImage: movie.backdrop_path
//           ? `url(${bgPath + movie.backdrop_path})`
//           : "none",
//       }}
//     >
//       <div className="overlay">
//         <Container className="py-5">
//           <Row className="align-items-center">

//             <Col md={4} className="text-center mb-4">
//               <img
//                 src={
//                   movie.poster_path
//                     ? imgPath + movie.poster_path
//                     : "https://via.placeholder.com/500x750"
//                 }
//                 className="poster-img"
//                 alt={movie.title}
//               />
//             </Col>

//             <Col md={8}>
//               <h1 className="movie-title">{movie.title}</h1>

//               <p className="rating">⭐ {movie.vote_average}</p>
//               <p className="rating"> {movie.runtime} min</p>

//               <p className="overview">release_date: {movie.release_date ? movie.release_date : "N/A"}</p>
//               <p className="overview">Status: {movie.status ? movie.status : "N/A"}</p>
//               <p className="overview">Tagline: {movie.tagline ? movie.tagline : "N/A"}</p>
//               <p className="overview">Language: {movie.language ? movie.language : "EN"}</p>
//               <p className="overview">Overview: {movie.overview ? movie.overview : "N/A"}</p>

//               <div className="mt-3">
//                 {movie.genres?.map((g) => (
//                   <Badge key={g.id} bg="warning" text="dark" className="me-2">
//                     {g.name}
//                   </Badge>
//                 ))}

//                 {/* Buttons */}
//                 <div className="mt-4">
//                   <button
//                     onClick={() => navigate(`/edit/${movie.id}`)}
//                     className="btn btn-success me-2"
//                   >
//                     Edit
//                   </button>

//                   <button
//                     onClick={handleDelete}
//                     className="btn btn-danger"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </Col>

//           </Row>
//         </Container>
//       </div>
//     </div>
//   );
// };

// export default MovieDetails;