import React, { useContext } from "react";
import { ColorContext } from "../App";

function Slides({ slides, next, previous, restart, currentSlide }) {

  const {color, setColor, setSelectedColor} = useContext(ColorContext);
  console.log('COLOOR==>=>=>',color)

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
         disabled={currentSlide === 0}
          onClick={restart}
          data-testid="button-restart"
          className="small outlined"
        >
          Restart
        </button>
        <button disabled={currentSlide === 0}  onClick={previous} data-testid="button-prev" className="small">
          Prev
        </button>
        <button disabled={currentSlide === slides.length} onClick={next} data-testid="button-next" className="small">
          Next
        </button>

        <button disabled={currentSlide === slides.length} onClick={() => setSelectedColor((prev) => {return prev === 0 ? 1 : 0})} data-testid="button-next" className="small">
          Color
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">
          {slides[currentSlide] && slides[currentSlide].title}
        </h1>
        <p data-testid="text">
          {slides[currentSlide] && slides[currentSlide].text}
        </p>

        <p data-testid="text">
          Color: {color}
        </p>
      </div>
    </div>
  );
}

export default Slides;
