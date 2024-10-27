import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { searchMulti } from "../../services/tmdbService";

const SearchLens = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value.length > 2) { // Iniciar busca após 3 caracteres
      const searchResults = await searchMulti(value);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="flex justify-center items-center w-full p-3 relative">
      <IoSearchSharp />
      <input
        type="text"
        placeholder="Buscar filmes ou séries..."
        value={query}
        onChange={handleSearch}
        className="ml-2 p-2 border-b-2 border-gray-500 focus:outline-none"
      />
      {results.length > 0 && (
        <div className="absolute top-12 w-full bg-white dark:bg-gray-800 max-h-64 overflow-y-auto shadow-lg z-50">
          {results.map((item) => (
            <div key={item.id} className="p-2 border-b border-gray-300 dark:border-gray-700">
              {item.title || item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchLens;
