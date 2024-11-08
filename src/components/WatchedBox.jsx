import React, { useState } from "react";

const WatchedBox = ({ children }) => {
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="bg-slate-800 sm:w-[45%] sm:h-[100vh] w-full h-[60vh] relative rounded-md">
      <button
        className="absolute bg-green-400 text-white font-semibold rounded-full w-4 h-4 flex justify-center items-center top-2 right-2 p-3"
        onClick={() => setIsOpen2((current) => !current)}
      >
        {isOpen2 ? "-" : "+"}
      </button>

      {isOpen2 && children}
    </div>
  );
};

export default WatchedBox;
