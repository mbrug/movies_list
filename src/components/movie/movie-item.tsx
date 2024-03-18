import React from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setSelectedMovie} from "../../store/reducers/moviesReducer.ts";
import {Movie} from "../../store/actionTypes.ts";
import useMovieDetails from "../../hooks/movie-details-hooks.ts";
import Rating from "./rating.tsx";
import Description from "./description.tsx";
import placeholderImage from "../../assets/thumbnail.png"

interface MovieItemProps {
    movie: Movie;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
    const dispatch = useDispatch();
    const { movieDetails, loading } = useMovieDetails(movie.imdbID);

    const handleDetailsClick = () => {
        if(movieDetails) {
            dispatch(setSelectedMovie(movieDetails));
        }
    };

    return (
        <Link to={`/movie/${movie.imdbID}`} className="max-w-xs rounded overflow-hidden shadow-lg m-2 p-2" onClick={handleDetailsClick}>
            <img className="w-full min-w-80 h-80 object-fill" src={movie.Poster !== "N/A" ? movie.Poster : placeholderImage} alt={movie.Title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{movie.Title}</div>
                <Rating rating={movieDetails?.imdbRating || "0"} />
                <Description description={movieDetails?.Plot || ""} loading={loading} />
            </div>
        </Link>
    );
};

export default MovieItem;