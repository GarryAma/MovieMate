import React, { useState } from "react";
import PropTypes from "prop-types";

const StarRating = ({
  maxRating = 5,
  color = "yellow",
  size = 28,
  onSetMovie = () => {},
}) => {
  const [rate, setRate] = useState(0);
  const [temporaryRating, setTemporaryRating] = useState(0);

  const handleSetRate = (starPosition) => {
    setRate(starPosition);
    onSetMovie(starPosition);
  };

  const handleHover = (starPosition) => {
    setTemporaryRating(starPosition);
  };

  return (
    <div className="p-3 flex justify-between w-[90%]">
      <div className="flex">
        {Array.from({ length: maxRating }, (_, index) => index + 1).map(
          (singleNumber) => {
            const isFull = temporaryRating
              ? temporaryRating >= singleNumber
              : rate >= singleNumber;
            return (
              <Star
                onSetRate={() => handleSetRate(singleNumber)}
                onHoverIn={() => handleHover(singleNumber)}
                onHoverOut={() => handleHover(0)}
                currentRate={rate}
                isFull={isFull}
                color={color}
                size={size}
                key={singleNumber}
              />
            );
          }
        )}
      </div>
      <p className="text-white flex items-center p-2">
        {temporaryRating || rate || 0}
      </p>
    </div>
  );
};

// defining propTypes for StarRating component4
StarRating.propTypes = {
  maxRating: PropTypes.number,
};

const Star = ({ onSetRate, isFull, onHoverIn, onHoverOut, color, size }) => {
  return (
    <span
      onClick={onSetRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      className="flex justify-center items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={isFull ? `${color}` : "none"}
        viewBox={`0 0 ${size} ${size}`}
        stroke={`${color}`}
        width={size}
        height={size}
        className="size-6 cursor-pointer transform-none"
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
