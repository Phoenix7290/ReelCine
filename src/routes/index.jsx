import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "../pages/Home";
import Search from "../pages/Search";
import NotFound from "../pages/NotFound";
import MovieDetails from "../pages/MultiDetails";

const router = createBrowserRouter([
    {
        path: "/ReelCine/",
        element: <Home />,
    },
    {
        path: "/ReelCine/search",
        element: <Search />,
    },
    {
        path: "/ReelCine/movie/:id",
        element: <MovieDetails />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

const routes = () => {
    return (
        <RouterProvider router={router}/>
    );
}

export default routes;
