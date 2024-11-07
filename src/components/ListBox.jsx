import React, { useState } from "react";
import MovieList from "./MovieList";

const ListBox = () => {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className="bg-slate-800 sm:w-[45%] sm:h-[100vh] w-full h-[60vh] relative rounded-md overflow-y-auto">
      <button
        className="absolute bg-green-400 text-white font-semibold rounded-full w-4 h-4 flex justify-center items-center top-2 right-2 p-3"
        onClick={() => setIsOpen1((current) => !current)}
      >
        {isOpen1 ? "-" : "+"}
      </button>
      {isOpen1 && <MovieList />}
    </div>
  );
};

export default ListBox;
