import React from "react";

// showMove 'year' | 'rating';

const SharedMovieComponent = ({ movie, componentType = "", onSelect }) => {
  return (
    <li
      className="border-b border-slate-100/20 p-4 flex gap-5 cursor-pointer hover:bg-slate-700 transition-all duration-300"
      onClick={() => onSelect(movie.imdbID)}
    >
      <img src={movie.Poster} alt="" className="w-[60px] h-[80px]" />
      <div className="flex flex-col gap-2">
        <h3>{movie.Title}</h3>

        {componentType === "year" && (
          <p>
            <span className="mr-2 ">⏰</span>
            <span>{movie.Year}</span>
          </p>
        )}

        {componentType === "rating" ? (
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
        ) : null}
      </div>
    </li>
  );
};

export default SharedMovieComponent;
