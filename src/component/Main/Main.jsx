import React, { useState } from "react";

import "./Main.css";
import img from "../../store/store";

const previous = "PREVIOUS";
const next = "NEXT";

const Main = () => {
  const [start, setStart] = useState(0);
  const [image, setImage] = useState(img[start]);

  const ButtonClick = (param) => {
    if (param === previous) {
      setStart(start - 1);
      setImage(img[start]);
      if (start === 0) {
        setStart(4);
      }
    }
    if (param === next) {
      setStart(start + 1);
      setImage(img[start]);
      if (start === 4) {
        setStart(0);
      }
    }
  };

  return (
    <div className="content">
      <div>
        <button
          className="button-previous"
          onClick={() => ButtonClick(previous)}
        ></button>
      </div>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <button
          className="button-next"
          onClick={() => ButtonClick(next)}
        ></button>
      </div>
    </div>
  );
};

export default Main;
