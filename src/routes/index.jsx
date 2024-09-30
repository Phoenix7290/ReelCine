import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/ReelCine/",
        element: <Home />,
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
