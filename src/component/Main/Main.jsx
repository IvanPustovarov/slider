import React, { useState } from "react";

import "./Main.css";
import img from "../../store/store";

const previous = "PREVIOUS";
const next = "NEXT";

const Main = () => {
  const [start, setStart] = useState(0);
  const [image, setImage] = useState(img[start]);

  const ButtonClick = (param) => {
    let accumulateStartPlus = start + 1;
    let accumulateStartMinus = start - 1;

    if (param === previous) {
      setStart(accumulateStartMinus);
      setImage(img[accumulateStartMinus]);
      console.log(accumulateStartMinus);

      if (accumulateStartMinus === -1) {
        accumulateStartMinus = 4;
        setStart(accumulateStartMinus);
        setImage(img[accumulateStartMinus]);
        console.log(accumulateStartMinus);
      }
    }
    if (param === next) {
      setStart(accumulateStartPlus);
      setImage(img[accumulateStartPlus]);
      console.log(accumulateStartPlus);

      if (accumulateStartPlus === 4) {
        setStart(-1);
        console.log(accumulateStartPlus);
      }
    }
  };

  return (
    <div className="content">
      <button
        className="button-previous"
        onClick={() => ButtonClick(previous)}
      ></button>
      <img src={image} alt="jojo" />
      <button
        className="button-next"
        onClick={() => ButtonClick(next)}
      ></button>
    </div>
  );
};

export default Main;
