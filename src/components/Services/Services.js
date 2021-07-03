import React from "react";

function Services(props) {
  return (
    <div className="services">
      <div className={`services-box`}>
        <div className={`services-box-image ${props.imageGrid}`}>
          <img src={props.image} alt="services_image"></img>
        </div>
        <div className={`services-box-text`}>
          <h3 className="heading-3">{props.heading}</h3>
          <p>
            Nam vitae auctor nisi. Nullam malesuada vitae lectus eu eleifend.
            Curabitur venenatis mauris est, a varius ligula eleifend et. Proin
            consectetur mi a lorem mollis, id placerat tellus dapibus. Nam
            pretium placerat elit non convallis. Nulla facilisi.
          </p>
          <p>
            Proin euismod velit in diam bibendum bibendum. Integer ac aliquam
            massa, at facilisis sem. Proin ac odio mattis, cursus est quis,
            imperdiet ex.Suspendisse ornare imperdiet lorem, sit amet tincidunt
            libero rutrum sit amet.
          </p>
          <a href="consult">Consult Now</a>
        </div>

        <div className={`services-box-text`}>
          <h3 className="heading-3">{props.heading}</h3>
          <p>
            Nam vitae auctor nisi. Nullam malesuada vitae lectus eu eleifend.
            Curabitur venenatis mauris est, a varius ligula eleifend et. Proin
            consectetur mi a lorem mollis, id placerat tellus dapibus. Nam
            pretium placerat elit non convallis. Nulla facilisi.
          </p>
          <p>
            Proin euismod velit in diam bibendum bibendum. Integer ac aliquam
            massa, at facilisis sem. Proin ac odio mattis, cursus est quis,
            imperdiet ex.Suspendisse ornare imperdiet lorem, sit amet tincidunt
            libero rutrum sit amet.
          </p>
          <a href="consult">Consult Now</a>
        </div>
        <div className={`services-box-image`}>
          <img src={props.image} alt="services_image"></img>
        </div>
      </div>
    </div>
  );
}

export default Services;
