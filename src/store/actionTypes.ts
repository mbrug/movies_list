import {useDispatch} from "react-redux";
import {AppDispatch} from "./store.ts";

export const useAppDispatch = () => useDispatch<AppDispatch>();

export interface Movie {
    imdbID: string;
    Title: string;
    Year: string;
    Type: 'movie' | 'series' | 'episode';
    Poster: string;
}

export type PlotType = 'short' | 'full'

export interface SelectedMovie extends Movie {
    imdbRating: string;
    Plot: string;
    Director: string;
    Actors: string;
    Genre: string;
}

export interface MoviesState {
    movies: Movie[];
    selectedMovie: SelectedMovie | null;
    searchParams: {
        query: string;
        year: string;
        page: number;
        totalResults: number
    };
    loading: boolean;
    error: string | null;
}