import React from "react";

const Movie = ({ movie }) => {
  return (
    <li className="border-b border-slate-100/20 p-4 flex gap-5">
      <img src={movie.Poster} alt="" className="w-[40px] h-[70px]" />
      <div className="flex flex-col gap-2">
        <h3>{movie.Title}</h3>
        <p>
          <span className="mr-2">🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
};

export default Movie;
