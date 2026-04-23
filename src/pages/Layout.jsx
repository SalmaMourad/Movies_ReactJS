import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Suspense } from "react";

const Layout = () => {
    return (
        <>
            <NavBar />
            <Suspense fallback={<h2>Loading...</h2>}>
                <Outlet />
            </Suspense>
        </>
    );
};
export default Layout;