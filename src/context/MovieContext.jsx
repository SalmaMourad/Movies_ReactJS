import { createContext, useContext, useState, useEffect } from "react";
import {
  getMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../api/movieApi";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const data = await getMovies();
    setMovies(data);
  };

  const getMovie = async (id) => {
    return await getMovieById(id);
  };

  const addMovie = async (movie) => {
    await createMovie(movie);
    fetchMovies();
  };

  const editMovie = async (id, movie) => {
    await updateMovie(id, movie);
    fetchMovies();
  };

  const removeMovie = async (id) => {
    await deleteMovie(id);
    setMovies((prev) => prev.filter((m) => m.id !== id));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies,
        fetchMovies,
        getMovie,
        addMovie,
        editMovie,
        removeMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => useContext(MovieContext);