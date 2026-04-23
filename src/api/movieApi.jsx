const API_URL = "http://localhost:3001/movies";

export const getMovies = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const getMovieById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
};

export const createMovie = (movie) =>
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(movie),
  });

export const updateMovie = (id, movie) =>
  fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(movie),
  });

export const deleteMovie = (id) =>
  fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
