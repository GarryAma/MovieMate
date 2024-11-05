import React, { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");

  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      type="text"
      placeholder="Search movies..."
      className="p-2 text-xs md:text-xs rounded-sm focus:outline-none "
    />
  );
};

export default Search;
