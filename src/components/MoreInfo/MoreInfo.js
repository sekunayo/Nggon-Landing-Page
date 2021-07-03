import React from "react";

function MoreInfo() {
  return (
    <div className="more-info">
      <div className="more-info-box">
        <div className="more-info-first-box">
          <h3 className="heading-3" data-aos="fade-up">
            Get to know us more
          </h3>
          <p className="more-info-first-box-text" data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
            lacus quis tellus sodales commodo.
          </p>
        </div>
        <div className="more-info-second-box">
          <div className="more-info-second-box-inner" data-aos="fade-up">
            <h3>14</h3>
            <p>Years Experience</p>
          </div>
          <div className="more-info-second-box-inner" data-aos="fade-up">
            <h3>10k</h3>
            <p>Professional Architect</p>
          </div>
          <div className="more-info-second-box-inner" data-aos="fade-up">
            <h3>15k</h3>
            <p>Projects Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreInfo;
