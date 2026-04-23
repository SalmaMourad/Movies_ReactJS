import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import { lazy } from "react";
import Layout from "../pages/Layout";
import { getMovies, getMovieById } from "../api/movieApi";
import AddEditMovie from "../pages/AddEditMovie";
const Home = lazy(() => import("../pages/Home"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const AddMovie = lazy(() => import("../pages/AddMovie"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: getMovies,
      },
      {
        path: "movie/:id",
        element: <MovieDetails />,
        loader: ({ params }) => getMovieById(params.id),
      },
      {
        path: "add",
        element: <AddEditMovie />,
      },
      {
        path: "edit/:id",
        element: <AddEditMovie />,
        loader: ({ params }) =>
          fetch(`http://localhost:3001/movies/${params.id}`),
      },
      {
        path:"about",
        element:<About />,
        
      }
    ],

  },
]);
