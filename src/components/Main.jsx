import React, { useState } from "react";
import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";

const Main = () => {
  return (
    <main className="flex flex-col sm:flex-row sm:justify-center gap-5 mt-10">
      <ListBox />
      <WatchedBox />
    </main>
  );
};

export default Main;
