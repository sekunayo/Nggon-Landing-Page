import React from "react";
import hero from "../../assets/images/hero.jpg";
import Button from "../Button/Button";
function Hero() {
  return (
    <div className="hero animate__animated animate__SlideInLeft">
      <div className="hero-image">
        <img src={hero} alt="hero"></img>
        <div className="overlay-white"></div>
        <div className="overlay-text-container">
          <h1>
            We're help build your dream{" "}
            <span className="bold">professionally</span>
          </h1>
          <p>
            We always prioritize the maximum possible results with modern
            methods, and the latest texhnology that we use so far the client is
            very proud of the solid results.
          </p>
          <form>
            <input
              type="email"
              placeholder="Drop your email address here"
            ></input>
            <Button
              buttonStyle="button button-dark"
              children="Let's Consult Now"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hero;
