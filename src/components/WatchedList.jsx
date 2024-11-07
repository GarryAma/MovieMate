import React from "react";
import WatchedMovie from "./WatchedMovie";

const WatchedList = ({ watched }) => {
  return (
    <ul className="text-white text-xs sm:text-sm">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} />
      ))}
    </ul>
  );
};

export default WatchedList;
