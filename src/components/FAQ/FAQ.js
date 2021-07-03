import React from "react";
import service1 from "../../assets/images/concepting.jpg";
import Accordion from "./Accordion/Accordion";

function FAQ() {
  const accordion = [
    {
      id: 1,
      heading: "What is the first process before building a tower ?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus, enim blandit vulputate sollicitudin, turpis massa molestie tortor, vitae fermentum nibh felis ac massa.",
    },
    {
      id: 2,
      heading: "How long you do the concept of a building?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus, enim blandit vulputate sollicitudin, turpis massa molestie tortor, vitae fermentum nibh felis ac massa",
    },
    {
      id: 3,
      heading: "Can you build buildings as fast as lightening",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus, enim blandit vulputate sollicitudin, turpis massa molestie tortor, vitae fermentum nibh felis ac massa.",
    },
    {
      id: 4,
      heading: "Can it be done immediately when it is paid for?",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus, enim blandit vulputate sollicitudin, turpis massa molestie tortor, vitae fermentum nibh felis ac massa.",
    },
  ];

  return (
    <section className="faq">
      <div className="faq-box">
        <div className="faq-first-box">
          <h3 className="heading-3">Frequently asked questions</h3>
          <div className="faq-first-box-image">
            <img src={service1} alt="faq"></img>
          </div>
        </div>
        <div className="faq-second-box">
          {accordion.map((element, index) => {
            return (
              <Accordion
                heading={element.heading}
                text={element.text}
                key={element.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
