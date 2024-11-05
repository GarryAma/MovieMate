import React, { useState } from "react";
const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

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

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const Main = () => {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <main className="flex flex-col sm:flex-row sm:justify-center gap-5 mt-10">
      <div className="bg-slate-800 sm:w-[45%] sm:h-[100vh] w-full h-[60vh] relative rounded-md overflow-y-auto">
        <button
          className="absolute bg-green-400 text-white font-semibold rounded-full w-4 h-4 flex justify-center items-center top-2 right-2 p-3"
          onClick={() => setIsOpen1((current) => !current)}
        >
          {isOpen1 ? "-" : "+"}
        </button>
        {isOpen1 && (
          <ul className="text-white text-xs sm:text-sm">
            {movies.map((movie) => (
              <li
                key={movie.imdbID}
                className="border-b border-slate-100/20 p-4 flex gap-5"
              >
                <img src={movie.Poster} alt="" className="w-[40px] h-[70px]" />
                <div className="flex flex-col gap-2">
                  <h3>{movie.Title}</h3>
                  <p>
                    <span className="mr-2">🗓</span>
                    <span>{movie.Year}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="bg-slate-800 sm:w-[45%] sm:h-[100vh] w-full h-[60vh] relative rounded-md">
        <button
          className="absolute bg-green-400 text-white font-semibold rounded-full w-4 h-4 flex justify-center items-center top-2 right-2 p-3"
          onClick={() => setIsOpen2((current) => !current)}
        >
          {isOpen2 ? "-" : "+"}
        </button>

        {isOpen2 && (
          <>
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
            <ul className="text-white text-xs sm:text-sm">
              {watched.map((movie) => (
                <li
                  key={movie.imdbID}
                  className="border-b border-slate-100/20 p-4 flex gap-5"
                >
                  <img
                    src={movie.Poster}
                    alt=""
                    className="w-[40px] h-[70px]"
                  />
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
              ))}
            </ul>
          </>
        )}
      </div>
    </main>
  );
};

export default Main;
