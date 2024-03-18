import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Movie, MoviesState, SelectedMovie} from "../actionTypes.ts";

const initialState: MoviesState = {
    movies: [],
    selectedMovie: null,
    searchParams: {
        query: "",
        year: "",
        page: 1,
        totalResults: 0
    },
    loading: false,
    error: null,
};

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        fetchMoviesStart(state: MoviesState) {
            state.loading = true;
            state.error = null;
        },
        fetchMoviesSuccess(state: MoviesState, action: PayloadAction<Movie[]>) {
            state.loading = false;
            state.movies = action.payload;
        },
        fetchMoviesFailure(state: MoviesState, action: PayloadAction<string>) {
            state.loading = false;
            state.movies = []
            state.error = action.payload;
        },
        setSelectedMovie(state: MoviesState, action: PayloadAction<SelectedMovie>) {
            state.selectedMovie = action.payload;
        },
        setSearchParams(state: MoviesState, action: PayloadAction<{ query: string; year: string; page: number, totalResults: number }>) {
            state.searchParams = action.payload;
        },
        setSearchPage(state: MoviesState, action: PayloadAction<number>) {
            state.searchParams = {...state.searchParams, page: action.payload}
        },
        setMoviesError(state: MoviesState, action: PayloadAction<string | null>) {
            state.error = action.payload;
        },
    },
});

export const { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesFailure, setSelectedMovie, setSearchParams, setSearchPage, setMoviesError } =
    moviesSlice.actions;

export default moviesSlice.reducer;