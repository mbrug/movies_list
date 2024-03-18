import {useEffect} from "react";
import {useAppDispatch} from "../store/actionTypes.ts";
import {useSelector} from "react-redux";
import {
    searchMoviesAsync,
    selectMovies,
    selectSearchParams
} from "../store/actions/movieActions.ts";
import MovieList from "../components/movie/movie-list.tsx";
import SearchBar from "../components/layout/search-bar.tsx";

const Home = () => {
    const dispatch = useAppDispatch();
    const movies = useSelector(selectMovies);
    const { query, year, page } = useSelector(selectSearchParams);

    useEffect(() => {
        dispatch(searchMoviesAsync());
    }, [query, year, page, dispatch]);

    return (
        <div>
            <SearchBar />
            <div className="pt-14">
                <MovieList movies={movies} />
            </div>
        </div>
    );
}
export default Home