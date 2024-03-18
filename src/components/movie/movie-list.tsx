import React from "react";
import MovieItem from "./movie-item.tsx";
import Pagination from "../layout/pagination.tsx";
import {Movie} from "../../store/actionTypes.ts";

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
            <Pagination />
        </>
    );
};

export default MovieList;