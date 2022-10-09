import "./Double_Slider.css"

function Double_Slider() {
  return (
    <>
      <main className="container">
        <div className="slider-track">
          <input type="range" min="0" max="100"  defaultValue="30" id="Double-left" />
          <input type="range" min="0" max="100"  defaultValue="70" id="Double-right" />
        </div>
      </main>
    </>
  );
}

export default Double_Slider;
