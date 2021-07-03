import React from "react";
import service1 from "../../assets/images/concepting.jpg";

function Slider() {
  return (
    <section className="slider">
      <div className="slider-image">
        <img src={service1} alt="slider_image"></img>
      </div>
      <div className="slider-text-container">
        <h3 className="heading-3">
          Clean Rounded Triangle Minimalism Style Building
        </h3>
        <div className="slider-preview">
          <div className="slider-button-box">
            <div className="slider-button-outer">
              <div className="slider-button-inner slider-button-active"></div>
            </div>
            <div className="slider-button-outer slider-button-inactive">
              <div className="slider-button-inner hide "></div>
            </div>
            <div className="slider-button-outer slider-button-inactive">
              <div className="slider-button-inner hide"></div>
            </div>
          </div>
          <div className="slider-arrows">
            <div className="slider-arrows-prev">
              <i class="fas fa-chevron-left"></i>
            </div>
            <div className="slider-arrows-next">
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
