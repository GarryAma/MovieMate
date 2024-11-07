import React from "react";

const WatchedMovie = ({ movie }) => {
  return (
    <li
      key={movie.imdbID}
      className="border-b border-slate-100/20 p-4 flex gap-5"
    >
      <img src={movie.Poster} alt="" className="w-[40px] h-[70px]" />
      <div className="flex flex-col gap-2">
        <h3>{movie.Title}</h3>
        <div className="flex space-x-6">
          <p>
            <span className="mr-1">⭐️</span>
            <span>{movie.imdbRating}</span>
          </p>
          <p>
            <span className="mr-1">🌟</span>
            <span>{movie.userRating}</span>
          </p>
          <p>
            <span className="mr-1">⏳</span>
            <span>{movie.runtime} min</span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default WatchedMovie;
