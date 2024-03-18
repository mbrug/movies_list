import { useState, useEffect } from 'react';
import {PlotType, SelectedMovie} from "../store/actionTypes.ts";
import {getMovieDetails} from "../service/movie-service.ts";

interface MovieDetailsState {
    movieDetails: SelectedMovie | null;
    loading: boolean;
    error: string | null;
}

const useMovieDetails = (imdbID: string, plot: PlotType = 'short'): MovieDetailsState => {
    const [movieDetails, setMovieDetails] = useState<SelectedMovie | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            setLoading(true);
            try {
                const details = await getMovieDetails(imdbID, plot);
                setMovieDetails(details);
                setLoading(false);
            } catch (error) {
                setError((error as Error).message || 'Error fetching movie details');
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [imdbID, plot]);

    return { movieDetails, loading, error };
};

export default useMovieDetails;
