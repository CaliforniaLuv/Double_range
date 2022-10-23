import {useEffect, useRef, useState } from "react";
import "./Double_Slider.css"

function Double_Slider() {

  const arr = [{word:"0", left:-0.5}, {word:"10K", left:11.5}, {word:"20K", left:23.8}, {word:"50K", left: 36}, {word:"100K", left:48.1}, {word:"150K", left:60.2}, {word: "200K", left:72.4}, {word:"500K", left:84.5}, {word:"1M", left:96.7}]
  const arr_copy = ["0", "10K", "20K", "50K", "100K", "150K", "200K", "500K", "1M"]
  const [range, setRange] = useState({
    left: 0,
    left_pos: 0,
    right: 100,
    right_pos: 8,
  })

  const track = useRef(0)

  const handleLeft = (e) => {
    setRange({...range, left: e.target.value, left_pos: e.target.value / 12.5})
    console.log(e.target.value)
  }

  const handleRight = (e) => {
    setRange({...range, right: e.target.value, right_pos: e.target.value / 12.5})
    console.log(321)
  }

  useEffect(() => {
    if(+range.left <= +range.right) {
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

  const trackClick = (idx) => {
    console.log("left :",range.left_pos - idx)
    console.log("right :", range.right_pos - idx)
    
    if(Math.abs(range.left_pos - idx) < Math.abs(range.right_pos - idx)) {
      
      handleLeft({target: { value: idx * 12.5}})
    } else {
      handleRight({target: { value: idx * 12.5}})
    }
  }

  return (
    <>
     <div className="values">
        <span className="left-value">{range.left} </span>
          -
          <span className="right-value"> {range.right}</span>
        </div>
      <main className="container">
        <div className="keywords-click">
          {/* onClick에 idx를 이용하여 특정 트리거에 걸리면 클릭 막기가 필요 */}
          {arr_copy.map((el, idx) => (<div key={idx} onClick={()=>trackClick(idx)} style={{width: "30px", height: "5px", zIndex: range.left / 12.5 !== idx  ? range.right / 12.5 !== idx  ? "2" : null :  null}}></div>))}
        </div>
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
              <div key={idx} style={{left: 11 * idx + "%"}}>
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
