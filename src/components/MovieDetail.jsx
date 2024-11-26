import React, { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Loader from "./Loader";
import StarRating from "./StarRating";

const MovieDetail = ({
  selectedMovieId,
  onGoBack,
  apiKey,
  onAddMovieToWatched,
  watched,
}) => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState(0);

  const isWatched = watched
    .map((singleMovie) => singleMovie.imdbID)
    .includes(selectedMovieId);

  const userRating = watched.find(
    (singleWatched) => singleWatched.imdbID === selectedMovieId
  );

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

  // console.log(movie);

  const genreLength = genre.split(",").length;

  //function for already watch!!
  const handleAlreadyWatched = () => {
    const newMovieWithUserRating = { ...movie, userRating: rating };
    onAddMovieToWatched(newMovieWithUserRating);
  };

  //function for adding user rating to rating state
  const handleAddRate = (rate) => {
    setRating(rate);
  };

  useEffect(() => {
    const fetchMovie = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${apiKey}&i=${selectedMovieId}`
        );
        const data = await response.json();
        setMovie(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [apiKey, selectedMovieId]);

  useEffect(() => {
    isLoading ? (document.title = "Loading...") : (document.title = `${title}`);

    return () => {
      document.title = "MovieMate";
      console.log(`clean up efffect for movie ${title}`);
    };
  }, [title, isLoading]);

  return (
    <div className="relative">
      <button
        className="text-white absolute bg-slate-900 font-semibold rounded-full w-5 h-5 flex justify-center items-center top-2 right-9 hover:bg-blue-400 duration-300 z-10"
        onClick={onGoBack}
      >
        <FaLongArrowAltLeft className="text-xs font-bold" />
      </button>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header className="w-full flex bg-slate-700">
            <div className="w-[40%]">
              <img src={poster} alt={poster} className="w-full h-full" />
            </div>

            <div className="w-[60%] text-white p-7 space-y-2">
              <h1 className="uppercase font-semibold">{title}</h1>
              <p className="text-xs">
                {released} · {runtime}
              </p>
              <div>
                {genre.split(",").map((each, index) => {
                  return (
                    <span className="text-xs" key={index}>
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

          <section className="text-xs text-white w-[100%] flex flex-col space-y-4 m-auto p-4">
            <div className="bg-slate-700 rounded-sm w-full">
              {isWatched ? (
                <div className="p-3 text-center">
                  you have rated this movie {userRating?.userRating} ⭐️
                </div>
              ) : (
                <>
                  <StarRating
                    maxRating={10}
                    size={23}
                    onSetMovie={handleAddRate}
                  />
                  {rating > 0 && (
                    <button
                      className="p-1 border border-white w-[60%] mx-auto block m-4 rounded-lg hover:border-green-500 hover:bg-slate-600 transition-all duration-300"
                      onClick={handleAlreadyWatched}
                    >
                      already watched ❓
                    </button>
                  )}
                </>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Staring · {actors}</p>
            <p>Director · {director}</p>
          </section>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
