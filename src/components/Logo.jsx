import React from "react";
import { GiFilmSpool } from "react-icons/gi";

const Logo = () => {
  return (
    <div className="text-white text-md md:text-xl">
      <GiFilmSpool className="inline" />
      <span> MovieMate</span>
    </div>
  );
};

export default Logo;
