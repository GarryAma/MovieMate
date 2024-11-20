import React, { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";

const MovieDetail = ({ selectedMovieId, onGoBack, apiKey }) => {
  const [movie, setMovie] = useState(null);

  console.log(movie);

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre = "",
    Language: language,
  } = movie || {};

  const genreLength = genre.split(",").length;

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${apiKey}&i=${selectedMovieId}`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [apiKey, selectedMovieId]);

  return (
    <div className="relative">
      <button
        className="text-white absolute bg-slate-900 font-semibold rounded-full w-5 h-5 flex justify-center items-center top-2 right-9 hover:bg-blue-400 duration-300 z-10"
        onClick={onGoBack}
      >
        <FaLongArrowAltLeft className="text-xs font-bold" />
      </button>

      <header className="w-full flex bg-slate-700">
        <div className="w-[30%]">
          <img src={poster} alt={poster} className="w-full h-full" />
        </div>

        <div className="w-[70%] text-white p-4 space-y-2">
          <h1 className="uppercase font-semibold">{title}</h1>
          <p className="text-xs">
            {released} · {runtime}
          </p>
          <div>
            {genre.split(",").map((each, index) => {
              return (
                <span className="text-xs">
                  {each} {index < genreLength - 1 ? "·" : ""}
                </span>
              );
            })}
          </div>
          <p className="text-xs">
            <span>🌎 {language}</span>
          </p>
          <p className="text-xs">⭐️ {imdbRating} imdbRating</p>
        </div>
      </header>

      <section className="text-xs text-white w-[95%] flex flex-col space-y-4 m-auto p-4">
        <p>
          <em>{plot}</em>
        </p>
        <p>Staring · {actors}</p>
        <p>Director · {director}</p>
      </section>
    </div>
  );
};

export default MovieDetail;
