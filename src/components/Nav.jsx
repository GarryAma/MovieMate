import React from "react";

const Nav = ({ children }) => {
  return (
    <nav className="bg-blue-900 flex justify-between items-center p-3 rounded-md">
      {children}
    </nav>
  );
};

export default Nav;
