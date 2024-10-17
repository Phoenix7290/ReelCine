import PropTypes from "prop-types";

const TVCard = ({ tv }) => {
  return (
    <div className=" bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
        alt={`${tv.name} poster`}
        className="__image w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-gray-700 text-xl font-bold mb-2">{tv.name}</h2>
        <p className="text-gray-900 font-semibold">Rating: {tv.vote_average}</p>
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
