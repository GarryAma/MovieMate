export const getMovieAverages = (moviesWatched) => {
  return moviesWatched.reduce(
    (acc, curr) => {
      acc.avgImdbRating += curr.imdbRating;
      acc.avgUserRating += curr.userRating;
      acc.avgRuntime += curr.runtime;

      return acc;
    },
    { avgImdbRating: 0, avgUserRating: 0, avgRuntime: 0 }
  );
};
