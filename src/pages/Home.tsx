import {useAppDispatch} from "../store/actionTypes.ts";
import {useSelector} from "react-redux";
import {
    searchMoviesAsync,
    selectMovies,
    selectSearchParams
} from "../store/actions/movieActions.ts";
import {useEffect} from "react";
import MovieList from "../components/movie-list.tsx";

const Home = () => {
    const dispatch = useAppDispatch();
    const movies = useSelector(selectMovies);
    const { query, year, page } = useSelector(selectSearchParams);

    useEffect(() => {
        dispatch(searchMoviesAsync());
    }, [query, year, page, dispatch]);

    return (
        <div>
            <div>SearchBar</div>
            <div className="pt-14">
                    <MovieList movies={movies} />
            </div>
        </div>
    );
}
export default Home