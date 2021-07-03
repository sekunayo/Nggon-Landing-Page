import React from "react";
import service1 from "../../assets/images/concepting.jpg";
import service2 from "../../assets/images/crane.jpg";
function Services(props) {
  return (
    <div className="services">
      <div className={`services-box`}>
        <div className="services-box-image" data-aos="fade-right">
          <div className={`absolute-image ${props.imageGrid}`}>
            <img src={service1} alt="services_image"></img>
          </div>
        </div>

        <div className={`services-box-text`}>
          <h3 className="heading-3" data-aos="fade-up">
            Always do concepting
          </h3>
          <p data-aos="fade-up">
            Nam vitae auctor nisi. Nullam malesuada vitae lectus eu eleifend.
            Curabitur venenatis mauris est, a varius ligula eleifend et. Proin
            consectetur mi a lorem mollis, id placerat tellus dapibus. Nam
            pretium placerat elit non convallis. Nulla facilisi.
          </p>
          <p data-aos="fade-up">
            Proin euismod velit in diam bibendum bibendum. Integer ac aliquam
            massa, at facilisis sem. Proin ac odio mattis, cursus est quis,
            imperdiet ex.Suspendisse ornare imperdiet lorem, sit amet tincidunt
            libero rutrum sit amet.
          </p>
          <div data-aos="fade-up">
            <a href="consult">
              Consult Now
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
            </a>
          </div>
        </div>

        <div className={`services-box-text`}>
          <h3 className="heading-3" data-aos="fade-up">
            Using tools always the best
          </h3>
          <p data-aos="fade-up">
            Nam vitae auctor nisi. Nullam malesuada vitae lectus eu eleifend.
            Curabitur venenatis mauris est, a varius ligula eleifend et. Proin
            consectetur mi a lorem mollis, id placerat tellus dapibus. Nam
            pretium placerat elit non convallis. Nulla facilisi.
          </p>
          <p data-aos="fade-up">
            Proin euismod velit in diam bibendum bibendum. Integer ac aliquam
            massa, at facilisis sem. Proin ac odio mattis, cursus est quis,
            imperdiet ex.Suspendisse ornare imperdiet lorem, sit amet tincidunt
            libero rutrum sit amet.
          </p>
          <div data-aos="fade-up">
            <a href="consult">
              Consult Now
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
            </a>
          </div>
        </div>
        <div className="services-box-image" data-aos="fade-left">
          <div className={`absolute-image ${props.imageGrid}`}>
            <img src={service2} alt="services_image"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
