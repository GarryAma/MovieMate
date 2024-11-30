import React from "react";

const NumResult = ({ movies }) => {
  return (
    <p className="text-white text-xs md:text-sm">
      <span className="hidden sm:inline">Found </span>
      <span className="text-yellow-200">{movies} </span>
      movies
    </p>
  );
};

export default NumResult;
