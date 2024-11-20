/* eslint-disable */

import React from "react";

// const average = (arr) =>
//   arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const WatchedSummary = ({ moviesWatched }) => {
  // const { avgImdbRating, avgUserRating, avgRuntime } = getMovieAverages(moviesWatched);

  const isMovieWatchExist = moviesWatched.length > 0;

  if (isMovieWatchExist) {
    const { avgImdbRating, avgUserRating, avgRuntime } = moviesWatched.reduce(
      (acc, curr) => {
        acc.avgImdbRating += curr.imdbRating;
        acc.avgUserRating += curr.userRating;
        acc.avgRuntime += curr.runtime;

        return acc;
      },
      { avgImdbRating: 0, avgUserRating: 0, avgRuntime: 0 }
    );
  }

  const tempWatchedData = [
    {
      imdbID: "tt1375666",
      Title: "Inception",
      Year: "2010",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      runtime: 148,
      imdbRating: 8.8,
      userRating: 10,
    },
    {
      imdbID: "tt0088763",
      Title: "Back to the Future",
      Year: "1985",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      runtime: 116,
      imdbRating: 8.5,
      userRating: 9,
    },
  ];

  return (
    <div className="text-white bg-slate-700 flex flex-col p-4 text-xs sm:text-sm rounded-lg">
      <h2 className="uppercase font-semibold text-yellow-300">
        Movies you watched
      </h2>
      <div className="flex justify-between mt-2">
        <p>
          <span className="mr-1">#️⃣</span>
          <span>{isMovieWatchExist ? moviesWatched.length : 0} movies</span>
        </p>
        <p>
          <span className="mr-1">⭐️</span>
          <span>
            {isMovieWatchExist ? avgImdbRating / moviesWatched.length : 0}
          </span>
        </p>
        <p>
          <span className="mr-1">🌟</span>
          <span>
            {isMovieWatchExist ? avgUserRating / moviesWatched.length : 0}
          </span>
        </p>
        <p>
          <span className="mr-1">⏳</span>
          <span>
            {isMovieWatchExist ? avgRuntime / moviesWatched.length : 0} min
          </span>
        </p>
      </div>
    </div>
  );
};

export default WatchedSummary;
