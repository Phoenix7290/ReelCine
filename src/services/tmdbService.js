import axios from 'axios';

const API_KEY =  import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/popular`, {
            params: {
                api_key: API_KEY,
                language: 'pt-BR',
                page: 1
            }
        });
        return response.data.results;
    } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
    }
};

export const fetchSeries = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/tv/popular`, {
            params: {
                api_key: API_KEY,
                language: 'pt-BR',
                page: 1
            }
        });
        return response.data.results;
    } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
    }
};
