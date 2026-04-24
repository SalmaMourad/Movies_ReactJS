import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { MovieProvider } from "./context/MovieContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { indigo, pink } from '@mui/material/colors';
import { indigo } from '@mui/material/colors';
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
    <ThemeProvider theme={darkTheme}>
      <MovieProvider>
        <RouterProvider router={router} />
      </MovieProvider>
    </ThemeProvider>
  );
}

export default App;


// import Button from "@mui/material/Button";
// import MyForm from "./components2/Form";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { red } from '@mui/material/colors';
// import { indigo, pink } from '@mui/material/colors';
// const darkTheme = createTheme({
//   palette: {
//     // mode: "dark",
//     primary: {
//       main: indigo[500],
//     },
//     secondary: {
//       main: pink[500],
//     },
//   },
// });
// function App() {

//   return (
//     <>
//       <ThemeProvider theme={darkTheme}>
//         <MyForm />
//       </ThemeProvider>
//     </>
//   )
// }

// export default App
