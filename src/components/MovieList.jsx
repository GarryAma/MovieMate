import React, { useState } from "react";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
  return (
    <ul className="text-white text-xs sm:text-sm">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default MovieList;
