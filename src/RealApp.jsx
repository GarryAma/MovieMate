import React, { useState } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";

const RealApp = () => {
  return (
    <div className="p-2 bg-slate-900 h-[100%]">
      <Nav />
      <Main />
    </div>
  );
};

export default RealApp;
