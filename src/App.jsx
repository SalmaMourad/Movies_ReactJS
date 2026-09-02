import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { MovieProvider } from "./context/MovieContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { indigo } from '@mui/material/colors';
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  const darkTheme = createTheme({
    palette: {
      // mode: "dark",
      primary: {
        main: indigo[500],
      },
      secondary: {
        main: indigo[300],
      },
    },
  });
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <MovieProvider>
          <RouterProvider router={router} />
        </MovieProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;