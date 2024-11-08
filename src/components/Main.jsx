import React, { useState } from "react";

const Main = ({ children }) => {
  return (
    <main className="flex flex-col sm:flex-row sm:justify-center gap-5 mt-10">
      {children}
    </main>
  );
};

export default Main;
