import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import MovieCard from "../../components/MovieCard";
import TVCard from "../../components/TVCard";
import { fetchMovies, fetchTVs } from "../../services/tmdbService";
import Footer from "../../components/Footer";

const Home = () => {
  const { t } = useTranslation();
  const [movies, setMovies] = useState([]);
  const [TVs, setTVs] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const moviesData = await fetchMovies();
      setMovies(moviesData);
      console.log(moviesData);
    };
    getMovies();
  }, []);

  useEffect(() => {
    const getTVs = async () => {
      const TVsData = await fetchTVs();
      setTVs(TVsData);
      console.log(TVsData);
    };
    getTVs();
  }, []);

  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900 dark:text-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold mb-4">
            {t("welcome_message")}
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            {t("welcome_description")}
          </p>
        </div>
        <h1 className="text-center text-4xl font-bold mb-6">
          {t("popular_movies")}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <h1 className="text-4xl font-bold mt-12 mb-6 text-center">
        {t("popular_series")}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {TVs.map((tv) => (
            <TVCard key={tv.id} tv={tv} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
