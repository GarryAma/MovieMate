import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Logo from "./components/Logo";
import Search from "./components/Search";
import NumResult from "./components/NumResult";
import ListBox from "./components/ListBox";
import MovieList from "./components/MovieList";
import WatchedSummary from "./components/WatchedSummary";
import WatchedList from "./components/WatchedList";
import StarRating from "./components/StarRating";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import MovieDetail from "./components/MovieDetail";

const KEY = "2016dc0e";

const RealApp = () => {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  // console.log(watched);

  //function for selecting movie
  const handleSelectMovieId = (movieId) => {
    setSelectedMovieId(selectedMovieId === movieId ? null : movieId);
  };

  //function to go back
  const handleGoBack = () => {
    setSelectedMovieId(null);
  };

  //function to select movie and move it to watched list
  const handleAddMovieToWatched = (movieObj) => {
    setWatched((current) => [...current, movieObj]);
    setSelectedMovieId(null);
  };

  //function to delete movie from watched list
  const handleDeleteMovie = (movieObj) => {
    setWatched((currentWatched) =>
      currentWatched.filter((single) => single.imdbID !== movieObj.imdbID)
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError("");
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );

        //no internet connection
        if (!response.ok)
          throw new Error("Something went wrong with internet connection❌");

        const data = await response.json();
        //movie not found
        if (data.Response === "False") throw new Error("Movie not found🚫");

        console.log(data);
        setMovies(data.Search);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
        // setError("");
      }
    };

    if (!query.length) {
      setMovies([]);
      setError("Please type your movie🍿");
      return;
    }

    fetchData();
  }, [query]);

  return (
    <div className="p-2 bg-slate-900 h-[100%]">
      <nav className="bg-blue-900 flex justify-between items-center p-3 rounded-md">
        <Logo />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search movies..."
          className="p-2 text-xs md:text-xs rounded-sm focus:outline-none "
        />
        <NumResult movies={movies.length} />
      </nav>
      <main className="flex flex-col sm:flex-row sm:justify-center gap-5 mt-10">
        <ListBox>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelect={handleSelectMovieId} />
          )}
          {error && <ErrorMessage error={error} />}
          {/* {isLoading ? <Loader /> : <MovieList movies={movies} />} */}
        </ListBox>
        <ListBox>
          {selectedMovieId ? (
            <MovieDetail
              selectedMovieId={selectedMovieId}
              onGoBack={handleGoBack}
              apiKey={KEY}
              onAddMovieToWatched={handleAddMovieToWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary moviesWatched={watched} />
              <WatchedList watched={watched} onDelete={handleDeleteMovie} />
            </>
          )}
        </ListBox>
        {/* we can pass COMPONENT/'S OR ELEMENT AS WELL!!! and receive props in the ListBox.jsx
        <ListBox component={<MovieList movies={movies} />} />
        <ListBox
          component={
            <>
              <WatchedSummary watched={watched} />
              <WatchedList watched={watched} />
            </>
          }
        /> */}
      </main>
      {/* <StarRating maxRating={10} color={"gold"} />
      <Test /> */}
    </div>
  );
};

export default RealApp;

const Test = () => {
  const [movieRate, setMovieRate] = useState(0);

  return (
    <div className="bg-red-600">
      <StarRating maxRating={10} color={"gold"} onSetMovie={setMovieRate} />
      <p>This movie is rated : {movieRate} rating</p>
    </div>
  );
};
