import axios from 'axios';

const API_KEY =  import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const userLanguage = navigator.language || "en-US";

export const fetchMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/popular`, {
            params: {
                api_key: API_KEY,
                language: userLanguage,
                page: 1
            }
        });
        return response.data.results;
    } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
    }
};

export const fetchTVs = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/tv/popular`, {
            params: {
                api_key: API_KEY,
                language: userLanguage,
                page: 1
            }
        });
        return response.data.results;
    } catch (error) {
        console.error('Error fetching TVs:', error);
        return [];
    }
};

export const searchMulti = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/search/multi`, {
            params: {
                api_key: API_KEY,
                language: userLanguage,
                query, 
                page: 1
            }
        });
        return response.data.results;
    } catch (error) {
        console.error('Error fetching search results:', error);
        return [];
    }
};

export const fetchMovieDetails = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${id}`, {
            params: {
                api_key: API_KEY,
                language: userLanguage,
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return null;
    }
};
