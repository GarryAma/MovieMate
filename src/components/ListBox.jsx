import React, { useState } from "react";

const ListBox = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-slate-800 sm:w-[45%] sm:h-[100vh] w-full h-[60vh] relative rounded-sm overflow-y-auto">
      <button
        className="absolute bg-slate-900 text-white font-semibold rounded-full w-5 h-5 flex justify-center items-center top-2 right-2 hover:bg-blue-400 duration-300 z-10"
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
};

export default ListBox;
