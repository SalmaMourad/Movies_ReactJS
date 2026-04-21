import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home2";
import MovieDetails from "./pages/MovieDetails";
import About from "./pages/About";
import NavBar from "./components/NavBar2";
import Contact from "./pages/contact";  

function App() {
  return (
    <BrowserRouter>
        <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;













// // import { Fragment } from "react"

// // import BootstrapCard from "./components/bootstrapCard"
// // import Root from "./components/componentsInteraction/Root"
// // import Task from "./components/Task"
// // import User from "./components/User"

// import "bootstrap/dist/css/bootstrap.css"
// import { BrowserRouter ,Routes ,Route} from "react-router"
// import Home from "./pages/Home"
// import About from "./pages/About"
// import UsersPage from "./pages/Users"
// import UserDetails from "./pages/userDetails"
// import AddUserPage from "./pages/AddUserPage"
// import NotFound from "./pages/NotFound"

// import NavBar from "./components/NavBar"


// function App() {

//   return (

//     <>
    
//  <BrowserRouter>
//  <NavBar></NavBar>
//      <Routes>
     
//       <Route path="/" element ={<Home></Home>}></Route>
//       <Route path="about" element ={<About/>}></Route>
//       <Route path="users" element ={<UsersPage/>}></Route>
//       <Route path="users/add" element ={<AddUserPage/>}></Route>
//  <Route path="users/:userId" element ={<UserDetails/>}></Route>
//  <Route path="*" element ={<NotFound/>}></Route>

//      </Routes>
//      {/* //footer */}
      
//  </BrowserRouter>
//     {/* <Users></Users> */}
    
//     </>

//   )
// }

// export default App
