import React from "react";

const ErrorMessage = ({ error }) => {
  return (
    <div className="flex items-center justify-center w-[70%] mx-auto p-3 m-7 text-white text-xs">
      <span>{error}</span>
    </div>
  );
};

export default ErrorMessage;
