import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchMulti } from "../../services/tmdbService";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (query) {
        const searchResults = await searchMulti(query);
        setResults(searchResults);
      }
    };
    fetchSearchResults();
  }, [query]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Resultados para &quot;{query}&quot;</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {results.map((item) => (
          <div key={item.id} className="p-2 border rounded shadow-md">
            <h3>{item.title || item.name}</h3>
            <p>{item.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
