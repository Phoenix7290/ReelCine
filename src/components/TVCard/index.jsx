import PropTypes from "prop-types";

const TVCard = ({ tv }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
      <img
        src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
        alt={`${tv.name} poster`}
        className="w-full h-auto object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{tv.name}</h2>
        <p className="text-yellow-500 font-semibold">Rating: {tv.vote_average}</p>
      </div>
    </div>
  );
};

TVCard.propTypes = {
  tv: PropTypes.shape({
    name: PropTypes.string.isRequired,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
  }),
};

export default TVCard;
