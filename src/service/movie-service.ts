import { AxiosError } from "axios";
import axiosInstance, { ApiError } from "../config/axios";
import {Movie, PlotType, SelectedMovie} from "../store/actionTypes.ts";

const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const handleApiError = (error: AxiosError): ApiError => {
    if (error.response) {
        const responseData: any = error.response.data;
        return {
            status: error.response.status,
            message: responseData.Error || "Error en la solicitud a la API",
        };
    } else if (error.request) {
        return {
            status: 0,
            message: "No se recibió respuesta del servidor",
        };
    } else {
        return {
            status: -1,
            message: error.message || "Error en la configuración de la solicitud",
        };
    }
};

export const searchMovies = async (
    title: string,
    year: string,
    page: number
): Promise<{ search: Movie[]; totalResults: number }> => {
    try {
        const response = await axiosInstance.get("", {
            params: {
                apikey: OMDB_API_KEY,
                s: title,
                y: year,
                page,
            },
        });
        if (response.data.Response === "False") {
            throw new Error(response.data.Error || "Error on api request");
        }

        return {
            search: response.data.Search || [],
            totalResults: response.data.totalResults,
        };
    } catch (error) {
        const axiosError = error as AxiosError;
        throw handleApiError(axiosError);
    }
};

export const getMovieDetails = async (
    imdbID: string,
    plot: PlotType = "short"
): Promise<SelectedMovie> => {
    try {
        const response = await axiosInstance.get("", {
            params: {
                apikey: OMDB_API_KEY,
                i: imdbID,
                plot,
            },
        });
        if (response.data.Response === "False") {
            throw new Error(response.data.Error || "Error on api request");
        }
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        throw handleApiError(axiosError);
    }
};
