import React from "react";
import {Movie} from "../../store/actionTypes.ts";
import MovieItem from "./movie-item.tsx";

interface MovieListProps {
    movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
    return (
        <>
            <h1 className="font-bold text-2xl mx-auto w-full text-center py-1">Lista de Películas</h1>
            <div className="flex flex-wrap justify-center">
                {movies.map((movie) => (
                    <MovieItem key={movie.imdbID} movie={movie} />
                ))}
            </div>
        </>
    );
};

export default MovieList;