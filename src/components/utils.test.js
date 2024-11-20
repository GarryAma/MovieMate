import { getMovieAverages } from "./utils";

const tempMovieData = [
  {
    imdbRating: 10,
    userRating: 7,
    runtime: 170,
  },
  {
    imdbRating: 8,
    userRating: 4,
    runtime: 120,
  },
  {
    imdbRating: 5,
    userRating: 3,
    runtime: 270,
  },
];

describe("getMovieAverages", () => {
  it("should return all averages of movies", () => {
    const result = getMovieAverages(tempMovieData);
    expect(result).toStrictEqual({
      avgImdbRating: 23,
      avgRuntime: 560,
      avgUserRating: 14,
    });
  });
});
