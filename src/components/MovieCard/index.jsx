import PropTypes from "prop-types";

const MovieCard = ({ movie }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
            <img className="w-full h-auto object-cover" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} movie`} />
            <div className="p-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{movie.title}</h2>
                <p className="text-gray-700 dark:text-gray-300">{movie.release_date}</p>
                <p className="text-yellow-500 font-semibold">Rating: {movie.vote_average}</p>
            </div>
        </div>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
    }).isRequired,
};

export default MovieCard;
