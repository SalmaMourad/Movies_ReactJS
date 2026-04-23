import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  );
}

export default App;