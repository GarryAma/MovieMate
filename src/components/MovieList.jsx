import React, { useState } from "react";
import SharedMovieComponent from "./SharedMovieComponent";

const MovieList = ({ movies, onSelect }) => {
  return (
    <ul className="text-white text-xs sm:text-sm">
      {movies.map((movie) => (
        <SharedMovieComponent
          movie={movie}
          key={movie.imdbID}
          componentType="year"
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
};

export default MovieList;
