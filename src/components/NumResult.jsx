import React from "react";

const NumResult = ({ movies }) => {
  return (
    <p className="text-white text-xs md:text-sm">
      Found {movies.length} results
    </p>
  );
};

export default NumResult;
