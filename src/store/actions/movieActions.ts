import {RootState} from "../reducers/rootReducer.ts";

export const selectMovies = (state: RootState) => state.movies.movies;
export const selectSelectedMovie = (state: RootState) => state.movies.selectedMovie;
export const selectSearchParams = (state: RootState) => state.movies.searchParams;
export const selectMoviesError = (state: RootState) => state.movies.error;
export const selectMoviesLoading = (state: RootState) => state.movies.loading;