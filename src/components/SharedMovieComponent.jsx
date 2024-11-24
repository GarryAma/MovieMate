import React from "react";

// showMove 'year' | 'rating';

const SharedMovieComponent = ({
  movie,
  componentType = "",
  onSelect,
  disabled = false,
  onDelete = () => {},
}) => {
  return (
    <li
      className={`border-b border-slate-100/20 p-4 flex gap-5 cursor-pointer hover:bg-slate-500 transition-all duration-300 ${
        disabled ? "cursor-not-allowed" : ""
      }`}
      onClick={() => onSelect(movie.imdbID)}
    >
      <img src={movie.Poster} alt="" className="w-[60px] h-[80px]" />
      <div className="flex flex-col gap-2 w-full">
        <h3>{movie.Title}</h3>

        {componentType === "year" && (
          <p>
            <span className="mr-2 ">⏰</span>
            <span>{movie.Year}</span>
          </p>
        )}

        {componentType === "rating" ? (
          <div className="flex space-x-2 text-xs relative">
            <p>
              <span>⭐️</span>
              <span>{movie.imdbRating}</span>
            </p>
            <p>
              <span>🌟</span>
              <span>{movie.userRating}</span>
            </p>
            <p>
              <span>⏳</span>
              <span>{movie.Runtime}</span>
            </p>
            <button
              className="absolute right-1 border border-white w-5 h-5  hover:bg-red-600 hover:border-slate-700 hover:text-slate-700 duration-300 transition-all rounded-sm"
              onClick={() => onDelete(movie)}
            >
              X
            </button>
          </div>
        ) : null}
      </div>
    </li>
  );
};

export default SharedMovieComponent;
