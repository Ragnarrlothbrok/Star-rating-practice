import React, { useState } from "react";

const Star = ({ stars }) => {
  const total = [...Array(stars)];

  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  const clicked = (i) => {
    if (i == rating) setRating(0);
    else setRating(i);
  };

  const mouseLeave = (i) => {
    setHovered(0);
  };

  const mouseOver = (i) => {
    setHovered(i);
  };

  return (
    <>
      <h1>Star Rating</h1>
      <div className="star-container">
        {total.map((_, i) => (
          <div
            key={i}
            className={`${rating > i && hovered == 0 && "filled"} ${
              hovered > i && "filled"
            }`}
            onClick={() => clicked(i + 1)}
            onMouseOver={() => mouseOver(i + 1)}
            onMouseLeave={() => mouseLeave()}
          >
            &#9733;
          </div>
        ))}
      </div>
      <h3>Total rating: {rating}</h3>
    </>
  );
};

export default Star;
