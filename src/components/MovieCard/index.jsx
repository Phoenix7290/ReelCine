import PropTypes from "prop-types";

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} movie`} />
            <h2>{movie.title}</h2>
            <p>{movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
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
