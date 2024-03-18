import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home.tsx";
import MovieDetail from "../pages/MovieDetail.tsx";

export const router = createBrowserRouter([
    {
        path: "",
        element: <Home />
    },
    {
        path: "movie/:imdbID",
        element: <MovieDetail />
    }
])