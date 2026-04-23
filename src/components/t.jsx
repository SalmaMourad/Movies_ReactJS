// import { useState, useEffect, useCallback, createContext } from "react"
// import { v4 as uuid } from "uuid"
// import axios from "axios"

// // 1-
// export const usersContext = createContext()
// const UsersContextProvider = ({ children }) => {
//     const [usersArr, setUsersArr] = useState(
//         [
            // { id: uuid(), name: "Ahmed", age: 20 },
//             { id: uuid(), name: "Mona", age: 30 },
//             { id: uuid(), name: "Laila", age: 2 },
//             { id: uuid(), name: "Yossef", age: 15 },
//             { id: uuid(), name: "Ali", age: 28 },
//         ])
//     //   

//     const [counter, setCounter] = useState(0);
//     const [disabled, setDisabled] = useState(false)
//     const incrementAge = useCallback((userId) => {
//         setUsersArr((oldUsers) => oldUsers.map((u) => u.id === userId ? { ...u, age: u.age + 1 } : u))
//     }, [])
//     const addUser = useCallback((userData) => {
//         // console.log(userData);
//         setCounter((oldCounter) => oldCounter + 1)
//         setUsersArr([...usersArr, { ...userData, id: uuid(), age: +userData.age }])
//         if (counter >= 2)
//             setDisabled(true);
//     }, [usersArr, counter])
//     //   useEffect(()=>{
//     //           axios.get("http://localhost:3000/users").then(res=>setUsersArr(res.data))
//     //       },[])
//     return (
//         <usersContext.Provider value={{ usersArr, incrementAge, counter, addUser, disabled }}>
//             {children}
//         </usersContext.Provider>
//     );
// }

// export default UsersContextProvider;


// import Users from "../components/Users"
// const UsersPage = () => {
//     return <Users ></Users>
// }
// export default UsersPage;


// import axios from "axios"
// import { useParams } from "react-router"
// import { useState, useEffect, useContext } from "react"
// import SimpleBackdrop from "../components/spinner"
// import { usersContext } from "../contexts/usersContextProvider"
// const UserDetails = () => {
//     const { usersArr } = useContext(usersContext)
//     const { userId } = useParams()
//     const [user, setUser] = useState(null)

//     useEffect(() => {
//         setUser(usersArr.find(u => u.id === userId))
//         //   axios.get(`http://localhost:3000/users/${userId}`).then(res=>setUser(res.data))
//     }, [usersArr, userId])

//     //    console.log(x)
//     if (!user) return <SimpleBackdrop></SimpleBackdrop>
//     return <h1>UserDetails of {userId}
//         name is {user.name} , email is {user.email}
//     </h1>
// }
// export default UserDetails;


// import { useState, useEffect, useCallback, useMemo, useContext } from "react";
// import User from "./User"
// import { v4 as uuid } from "uuid"
// import AddUser from "./AddUser";
// import RecipeReviewCard from "./CardMui";
// import axios from "axios";
// import { useLoaderData } from "react-router"
// import SimpleBackdrop from "./spinner.jsx"
// import UseTimer from "../hooks/useTimer"
// import { usersContext } from "../contexts/usersContextProvider"
// const Users = () => {
//     const usersArr = useLoaderData()
//     const { counter, incrementAge } = useContext(usersContext)
//     const [timer, dec, inc, reset] = UseTimer(50)
//     // console.log (x)
//     // useCallback(()=>{},[])
//     // useMemo(()=>{},[])
//     let adults = useMemo(() => usersArr?.filter((user => {
//         console.log("heavy operation");
//         return user.age >= 16
//     })).length, [usersArr])
//     if (!usersArr) return <SimpleBackdrop></SimpleBackdrop>
//     return (
//         <div>
//             timer :{timer}
//             <button onClick={dec}>decrement</button>
//             <button onClick={inc}>increment</button>
//             <button onClick={reset}>reset</button>

//             <br></br>
//             Adults : {adults}
//             <br></br>
//             counter is {counter}

//             {usersArr.map((u) => {
//                 return <User key={uuid()} id={u.id} name={u.name} age={u.age} incrementAge={incrementAge}>

//                 </User>

//             }
//             )}
//         </div>
//     );
// }
// export default Users;


// import React, { useState, useContext } from 'react';
// import styles from "../styles/addUser.module.css"
// import { useNavigate } from "react-router"
// import { usersContext } from "../contexts/usersContextProvider"
// const AddUser = () => {
//     const { addUser, disabled } = useContext(usersContext)
//     const [user, setUser] = useState({ name: "", age: "" })
//     const navigate = useNavigate()
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         addUser(user)
//         setUser({ name: "", age: "" })
//         navigate("/users")
//     }
//     // const handleChangeName=(e)=>{
//     //    setUser({...user,name:e.target.value})
//     // }
//     // const handleChangeAge=(e)=>{
//     //     setUser({...user,age:e.target.value})
//     // }
//     const handleChange = (e) => {
//         // console.log(e.target.name);
//         const { name, value } = e.target
//         setUser({ ...user, [name]: value }) //computed property
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <label>Name : </label>
//             <input name='name' value={user.name} onChange={handleChange}></input>
//             <br></br>
//             <label>Age : </label>
//             <input name='age' value={user.age} onChange={handleChange}></input>
//             <br></br>
//             <input type='submit' className={styles.btn} disabled={disabled}></input>
//         </form>
//     );
// }
// export default AddUser;


// import React from 'react';
// import NavBar from "../components/NavBar"
// import { Outlet } from "react-router"
// const Layout = () => {
//     return (
//         <>
//             <NavBar></NavBar>
//             <Outlet></Outlet>
//             {/* //footer */}
//         </>
//     );
// }
// export default Layout;


// import UsersContextProvider from "./contexts/usersContextProvider"
// import "bootstrap/dist/css/bootstrap.css"
// // import { BrowserRouter, Routes, Route } from "react-router"
// import { createBrowserRouter, RouterProvider } from "react-router"
// import axios from "axios"
// import NavBar from "./components/NavBar"
// import { lazy, Suspense } from "react"
// // import Home from "./pages/Home"
// const Home = lazy(() => import("./pages/Home"));
// // import About from "./pages/About"
// const About = lazy(() => import("./pages/About"))

// // import UsersPage from "./pages/Users"
// const UsersPage = lazy(() => import("./pages/Users"))

// // import UserDetails from "./pages/userDetails"
// const UserDetails = lazy(() => import("./pages/userDetails"))

// // import AddUserPage from "./pages/AddUserPage"
// const AddUserPage = lazy(() => import("./pages/AddUserPage"))

// // import NotFound from "./pages/NotFound"
// const NotFound = lazy(() => import("./pages/NotFound"))
// const Layout = lazy(() => import("./pages/Layout"))

// function App() {
//     const loadData = async () => {
//         const res = await axios.get("http://localhost:3000/users")
//         return res.data
//     }
//     const router = createBrowserRouter([
//         {
//             path: "/", element: <Layout></Layout>
//             , children: [
//                 { index: true, element: <Home /> },
//                 { path: "/about", element: <About /> },
//                 { path: "/users", element: <UsersPage />, loader: loadData },

//                 { path: "/users/add", element: <AddUserPage /> },
//             ]
//             , errorElement: <NotFound></NotFound>
//         },
//         { path: "*", element: <NotFound></NotFound> }
//     ])
//     return (
//         <>
//             <Suspense fallback={<div>Loading...</div>}>
//                 <UsersContextProvider>
//                     <RouterProvider router={router}></RouterProvider>
//                 </UsersContextProvider>
//                 {/* <Users></Users> */}
//             </Suspense>
//         </>
//         // {/* <BrowserRouter>
//         //     <NavBar></NavBar>
//         //     <Routes>
//         //         <Route path="/" element={<Home></Home>}></Route>
//         //         <Route path="about" element={<About />}></Route>
//         //         <Route path="users" element={<UsersPage  />}></Route>
//         //         <Route path="users/add" element={<AddUserPage />}></Route>
//         //         <Route path="users/:userId" element={<UserDetails />}></Route>
//         //         <Route path="*" element={<NotFound />}></Route>
//         //     </Routes>
//         // </BrowserRouter> */}
//     )
// }
// export default App
