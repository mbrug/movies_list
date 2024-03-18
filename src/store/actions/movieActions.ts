import {Dispatch} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {RootState} from "../reducers/rootReducer.ts";
import {getMovieDetails, searchMovies} from "../../service/movie-service.ts";
import {fetchMoviesFailure, fetchMoviesStart, fetchMoviesSuccess, setSearchParams} from "../reducers/moviesReducer.ts";

export const selectMovies = (state: RootState) => state.movies.movies;
export const selectSelectedMovie = (state: RootState) => state.movies.selectedMovie;
export const selectSearchParams = (state: RootState) => state.movies.searchParams;
export const selectMoviesError = (state: RootState) => state.movies.error;
export const selectMoviesLoading = (state: RootState) => state.movies.loading;


export const searchMoviesAsync =
    () => async (dispatch: Dispatch, getState: () => RootState) => {
        const { query, year, page } = getState().movies.searchParams;
        try {
            dispatch(fetchMoviesStart());
            const {search, totalResults} = await searchMovies(query, year, page);
            dispatch(fetchMoviesSuccess(search));
            dispatch(setSearchParams({query, year, page, totalResults}));
        } catch (error) {
            const axiosError = error as AxiosError;
            dispatch(fetchMoviesFailure(axiosError.message));
        }
    };

export const getMovieDetailsAsync =
    (imdbID: string) => async (dispatch: Dispatch) => {
        try {
            dispatch(fetchMoviesStart());
            const movie = await getMovieDetails(imdbID);
            dispatch(fetchMoviesSuccess([movie]));
        } catch (error) {
            const axiosError = error as AxiosError;
            dispatch(fetchMoviesFailure(axiosError.message));
        }
    };