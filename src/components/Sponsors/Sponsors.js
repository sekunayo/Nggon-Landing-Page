import React from "react";
import rixos from "../../assets/images/rixos.png";
import starbucks from "../../assets/images/starbucks.png";
import choice from "../../assets/images/choice.png";
import residenceinn from "../../assets/images/residenceinn.png";
function Sponsors() {
  const images = [rixos, residenceinn, starbucks, choice];
  return (
    <section className="sponsor">
      <div className="sponsor-box">
        {images.map((element, index) => {
          return (
            <div className="sponsor-image" key={index + 1}>
              <img src={element} alt="sponsor__image"></img>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Sponsors;
