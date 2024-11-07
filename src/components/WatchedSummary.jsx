import React from "react";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const WatchedSummary = ({ watched }) => {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <div className="text-white bg-slate-700 flex flex-col p-4 text-xs sm:text-sm rounded-lg">
      <h2 className="uppercase font-semibold text-yellow-300">
        Movies you watched
      </h2>
      <div className="flex justify-between mt-2">
        <p>
          <span className="mr-1">#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span className="mr-1">⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span className="mr-1">🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span className="mr-1">⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
};

export default WatchedSummary;
