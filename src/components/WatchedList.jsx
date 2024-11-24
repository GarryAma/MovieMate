import React from "react";
import SharedMovieComponent from "./SharedMovieComponent";

const WatchedList = ({ watched, onDelete }) => {
  return (
    <ul className="text-white text-xs sm:text-sm">
      {watched.map((movie) => (
        <SharedMovieComponent
          movie={movie}
          key={movie.imdbID}
          componentType="rating"
          disabled={true}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default WatchedList;
