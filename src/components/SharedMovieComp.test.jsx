import SharedMovieComponent from "./SharedMovieComponent";
import { render, screen } from "@testing-library/react";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 120,
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    runtime: 180,
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    runtime: 160,
  },
];

describe("<SharedMovieComponent />", () => {
  it("should display the year movie was released", () => {
    render(
      <SharedMovieComponent movie={tempMovieData[0]} componentType="year" />
    );
    const movieDate = screen.getByText("2010");
    expect(movieDate).toBeDefined();
  });

  it("should display the movie run time", () => {
    render(
      <SharedMovieComponent movie={tempMovieData[0]} componentType="rating" />
    );

    screen.debug();
    const movieDate = screen.getByText("120 min");
    expect(movieDate).toBeDefined();
  });
});

// Test for any conditional logic (if ? && ||)
// only unit test important stuff
// checking existence of element in a component
// checking non-existence of element in a component
// custom hooks
// testing button/user interaction (e.g. when user clicks button-> make a api fetch request)
// testing button/user interaction (e.g. when user clicks button -> context state gets updated)
