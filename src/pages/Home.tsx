import {useEffect} from "react";
import {useAppDispatch} from "../store/actionTypes.ts";
import {useSelector} from "react-redux";
import {
    searchMoviesAsync,
    selectMovies, selectMoviesError, selectMoviesLoading,
    selectSearchParams
} from "../store/actions/movieActions.ts";
import MovieList from "../components/movie/movie-list.tsx";
import SearchBar from "../components/layout/search-bar.tsx";
import Loading from "../components/layout/loading.tsx";
import ErrorMessage from "../components/layout/error-message.tsx";
import {setMoviesError} from "../store/reducers/moviesReducer.ts";

const Home = () => {
    const dispatch = useAppDispatch();
    const movies = useSelector(selectMovies);
    const error = useSelector(selectMoviesError);
    const loading = useSelector(selectMoviesLoading);
    const {query, year, page} = useSelector(selectSearchParams);

    useEffect(() => {
        if (query.trim() === "") {
            dispatch(setMoviesError("Debe escribir un patrón de búsqueda"));
        } else {
            dispatch(searchMoviesAsync());
        }
    }, [query, year, page, dispatch]);

    return (
        <div>
            <SearchBar/>
            <div className="pt-14">
                {loading ? (
                    <Loading/>
                ) : error ? (
                    <ErrorMessage message={error} />
                ) : (
                    <MovieList movies={movies}/>
                )}
            </div>
        </div>
    );
}
export default Home