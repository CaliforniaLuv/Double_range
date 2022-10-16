import {useEffect, useRef, useState } from "react";
import "./Double_Slider.css"

function Double_Slider() {

  const arr = [{word:"0", left:-0.5}, {word:"10K", left:11.5}, {word:"20K", left:23.8}, {word:"50K", left: 36}, {word:"100K", left:48.1}, {word:"150K", left:60.2}, {word: "200K", left:72.4}, {word:"500K", left:84.5}, {word:"1M", left:96.7}]
  const arr_copy = ["0", "10K", "20K", "50K", "100K", "150K", "200K", "500K", "1M"]
  const [range, setRange] = useState({
    left: 0,
    right: 100
  })

  const track = useRef(0)

  const handleLeft = (e) => {
    setRange({...range, left: e.target.value})
    console.log(123)
  }

  const handleRight = (e) => {
    setRange({...range, right: e.target.value})
    console.log(321)
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
          <input type="range" min="0" max="100" step="12.5"  id="Double-left" value={range.left} onChange={handleLeft}/>
          <input type="range" min="0" max="100" step="12.5" id="Double-right" value={range.right} onChange={handleRight}/>
          
        </div>
        <div className="slider-keywords">
          {/* {arr.map((el) => 
            (
              <div style={{left: el.left  + "%"}}>
                <label>|</label>
                <span>{el.word}</span>
              </div>
            ))} */}

          {arr_copy.map((el, idx) => 
            (
              <div style={{left: 11.5 * idx + "%"}}>
                <label>|</label>
                <span>{el}</span>
              </div>
            ))}
          </div>
      </main>
    </>
  );
}

export default Double_Slider;
