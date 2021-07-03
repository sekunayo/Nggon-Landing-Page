import React, { useState } from "react";

function Accordion(props) {
  const [showText, setShowText] = useState(false);
  const setClickHandler = () => {
    //   const newElement = accordion.find((element) => {
    // });    return element.id === id;

    setShowText(!showText);
  };

  return (
    <>
      <div
        className={`faq-accordion ${
          showText ? "accordion-active" : "accordion-inactive"
        }`}
      >
        <div className="faq-accordion-text">
          <h5>{props.heading}</h5>
          <i
            className={`${showText ? "fas fa-minus" : "fas fa-plus"}`}
            onClick={setClickHandler}
          ></i>
        </div>
        {showText && <p>{props.text}</p>}
      </div>
    </>
  );
}

export default Accordion;
