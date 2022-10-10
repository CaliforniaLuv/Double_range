import { useState } from "react";
import "./Double_Slider.css"

function Double_Slider() {

  const [range, setRange] = useState({
    left: 0,
    right: 100
  })

  const handleLeft = (e) => {
    setRange({...range, left: e.target.value})
  }

  const handleRight = (e) => {
    setRange({...range, right: e.target.value})
  }

  return (
    <>
     <div className="values">
        <span className="left-value">{range.left} </span>
          -
          <span className="right-value"> {range.right}</span>
        </div>
      <main className="container">
        <div className="slider-track">
          <input type="range" min="0" max="100" step="11.11"  id="Double-left" value={range.left} onChange={handleLeft}/>
          <input type="range" min="0" max="100" step="11.11" id="Double-right" value={range.right} onChange={handleRight}/>
        </div>
      </main>
    </>
  );
}

export default Double_Slider;
