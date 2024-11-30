/* eslint-disable */

import React from "react";

// const average = (arr) =>
//   arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const WatchedSummary = ({ moviesWatched }) => {
  // const { avgImdbRating, avgUserRating, avgRuntime } = getMovieAverages(moviesWatched);

  const isMovieWatchExist = moviesWatched.length > 0;

  const { avgImdbRating, avgUserRating, avgRuntime } = moviesWatched.reduce(
    (prev, curr) => {
      prev.avgImdbRating += Number(curr.imdbRating);
      prev.avgUserRating += curr.userRating;
      prev.avgRuntime += Number(curr.Runtime.split(" ").at(0));

      return prev;
    },
    { avgImdbRating: 0, avgUserRating: 0, avgRuntime: 0 }
  );

  // console.log(avgImdbRating);
  // console.log(avgUserRating);
  // console.log(avgRuntime);

  return (
    <div className="text-white bg-slate-600 flex flex-col p-4 text-xs sm:text-sm rounded-lg">
      <h2 className="uppercase font-semibold text-yellow-300">
        Movies you watched
      </h2>
      <div className="flex justify-between mt-2 text-xs">
        <p>
          <span className="mr-1">#️⃣</span>
          <span>{isMovieWatchExist ? moviesWatched.length : 0} movies</span>
        </p>
        <p>
          <span className="mr-1">⭐️</span>
          <span>
            {isMovieWatchExist
              ? (avgImdbRating / moviesWatched.length).toFixed(1)
              : 0}
          </span>
        </p>
        <p>
          <span className="mr-1">🌟</span>
          <span>
            {isMovieWatchExist
              ? (avgUserRating / moviesWatched.length).toFixed(1)
              : 0}
          </span>
        </p>
        <p>
          <span className="mr-1">⏳</span>
          <span>
            {isMovieWatchExist
              ? (avgRuntime / moviesWatched.length).toFixed(1)
              : 0}{" "}
            min
          </span>
        </p>
      </div>
    </div>
  );
};

export default WatchedSummary;
