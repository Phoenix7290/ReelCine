import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import MovieCard from '../../components/MovieCard';
import { fetchMovies, fetchSeries } from '../../services/tmdbService';
import Footer from '../../components/Footer';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const moviesData = await fetchMovies();
            setMovies(moviesData);
        };
        getMovies();
    }, []);

    const [series, setSeries] = useState([]);

    useEffect(() => {
        const getSeries = async () => {
            const seriesData = await fetchSeries();
            setSeries(seriesData);
        };
        getSeries();
    }, []);

    return (
        <div className="flex flex-col min-h-screen dark:bg-gray-900 dark:text-white">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-extrabold mb-4">Welcome to ReelCine</h1>
                    <p className="text-xl text-gray-700 dark:text-gray-300">
                        Watch your favorite movies and TV shows here.
                    </p>
                </div>
                <h1 className="text-center text-4xl font-bold mb-6">Popular Movies</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
                <h1 className="text-4xl font-bold mt-12 mb-6 text-center">Popular Series</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {series.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
