import React from "react";
import minimalism from "../../assets/images/minimalism.jpg";

function Slider() {
  return (
    <section className="slider">
      <div className="slider-image" data-aos="fade-right">
        <div className="slider-absolute-image">
          <img src={minimalism} alt="slider_image"></img>
        </div>
      </div>
      <div className="slider-text-container">
        <h3 className="heading-3" data-aos="fade-up">
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
