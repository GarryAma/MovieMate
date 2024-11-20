import React from "react";
import SharedMovieComponent from "./SharedMovieComponent";

const WatchedList = ({ watched }) => {
  return (
    <ul className="text-white text-xs sm:text-sm">
      {watched.map((movie) => (
        <SharedMovieComponent
          movie={movie}
          key={movie.imdbID}
          componentType="rating"
        />
      ))}
    </ul>
  );
};

export default WatchedList;
