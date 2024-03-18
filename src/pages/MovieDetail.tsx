import Loading from "../components/layout/loading.tsx";
import {useNavigate, useParams} from "react-router-dom";
import useMovieDetails from "../hooks/movie-details-hooks.ts";
import placeholderImage from "../assets/thumbnail.png"

const MovieDetail = () => {
    const { imdbID } = useParams();
    const navigate = useNavigate();
    const { movieDetails, loading } = useMovieDetails(imdbID || "", "full");

    const handleGoBack = () => {
        navigate(-1);
    };

    if (loading) {
        return (
            <Loading />
        );
    }

    return (
        <div className="container mx-auto p-4">
            <button
                className="text-blue-600 hover:text-blue-800"
                onClick={handleGoBack}
            >
                &#8592; Back
            </button>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
                <div className="flex justify-center">
                    <img
                        src={movieDetails?.Poster !== "N/A" ? movieDetails?.Poster : placeholderImage}
                        alt={movieDetails?.Title}
                        className="rounded-lg shadow-lg"
                        style={{ maxWidth: 400 }}
                    />
                </div>
                <div>
                    <h1 className="text-3xl font-semibold mb-4">{movieDetails?.Title}</h1>
                    <p className="text-lg">
                        <strong>Rating:</strong> {movieDetails?.imdbRating}
                    </p>
                    <p className="text-lg">
                        <strong>Year:</strong> {movieDetails?.Year}
                    </p>
                    <p className="text-lg">
                        <strong>Genre:</strong> {movieDetails?.Genre}
                    </p>
                    <p className="text-lg">
                        <strong>Description:</strong> {movieDetails?.Plot}
                    </p>
                    <p className="text-lg">
                        <strong>Director:</strong> {movieDetails?.Director}
                    </p>
                    <p className="text-lg">
                        <strong>Actors:</strong> {movieDetails?.Actors}
                    </p>
                </div>
            </div>
        </div>
    );
};
export default MovieDetail;