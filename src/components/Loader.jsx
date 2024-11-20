import React from "react";
import PuffLoader from "react-spinners/PuffLoader";

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-[70%] mx-auto p-3 m-7">
      <PuffLoader size={15} color="gold" />
    </div>
  );
};

export default Loader;
