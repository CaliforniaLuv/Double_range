import {useEffect, useRef, useState } from "react";
import "./Double_Slider.css"

function Double_Slider() {

  const [range, setRange] = useState({
    left: 0,
    right: 100
  })

  const track = useRef(0)

  const handleLeft = (e) => {
    setRange({...range, left: e.target.value})
  }

  const handleRight = (e) => {
    setRange({...range, right: e.target.value})
  }

  useEffect(() => {
    if(range.left <= range.right) {
      trackRightEffect()
    } else {
      trackLeftEffect()
    }
  }, [range])

  const trackRightEffect = () => {
    track.current.style.background = `linear-gradient(to right, #dadae5 ${range.left}%, #3264fe ${range.left}%, 
      #3264fe ${range.right}%, #dadae5 ${range.right}%)`
  }

  const trackLeftEffect = () => {
    track.current.style.background = `linear-gradient(to right, #dadae5 ${range.right}%, #3264fe ${range.right}%, 
      #3264fe ${range.left}%, #dadae5 ${range.left}%)`
  }

  return (
    <>
     <div className="values">
        <span className="left-value">{range.left} </span>
          -
          <span className="right-value"> {range.right}</span>
        </div>
      <main className="container">
        <div className="slider-track" ref={track}>
          <input type="range" min="0" max="100" step="11.11"  id="Double-left" value={range.left} onChange={handleLeft}/>
          <input type="range" min="0" max="100" step="11.11" id="Double-right" value={range.right} onChange={handleRight}/>
        </div>
      </main>
    </>
  );
}

export default Double_Slider;
