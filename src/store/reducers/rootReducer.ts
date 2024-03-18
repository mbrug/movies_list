import { combineReducers } from '@reduxjs/toolkit';
import moviesReducer from "./moviesReducer.ts";

export const rootReducer = combineReducers({
    movies: moviesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;