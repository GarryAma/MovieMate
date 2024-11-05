import React, { useState } from "react";
import Search from "./Search";
import Logo from "./Logo";
import NumResult from "./NumResult";

const Nav = () => {
  return (
    <nav className="bg-blue-900 flex justify-between items-center p-3 rounded-md">
      <Logo />
      <Search />
      <NumResult />
    </nav>
  );
};

export default Nav;
