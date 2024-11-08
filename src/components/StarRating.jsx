import React, { useState } from "react";

const StarRating = () => {
  const [rate, setRate] = useState(0);

  const handleSetRate = (starPosition) => {
    setRate(starPosition);
  };

  console.log(rate);

  return (
    <div className="p-5 bg-blue-900 flex">
      {Array.from({ length: 5 }, (_, index) => index + 1).map(
        (singleNumber) => (
          <Star onSetRate={() => handleSetRate(singleNumber)} />
        )
      )}
      <p className="ml-3 font-thin text-white">{rate || ""}</p>
    </div>
  );
};

const Star = ({ onSetRate }) => {
  return (
    <span onClick={onSetRate}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="yellow"
        viewBox="0 0 28 28"
        stroke="yellow"
        className="size-6 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        />
      </svg>
    </span>
  );
};

export default StarRating;
