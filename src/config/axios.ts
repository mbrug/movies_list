import axios from "axios";

export interface ApiError {
    status: number;
    message: string;
}

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_OMDB_BASE_URL,
});

export default axiosInstance;