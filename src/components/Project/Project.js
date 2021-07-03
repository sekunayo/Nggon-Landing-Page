import React from "react";
import project1 from "../../assets/images/project1.png";
function Project() {
  return (
    <div className="project">
      <div className="project-box">
        <div className="project-box-text">
          <h3 className="heading-3" data-aos="fade-up">
            Project Completed
          </h3>
          <p data-aos="fade-up">
            This is a project we have worked on as professionally as possible so
            that our customers are very satisfied
          </p>
        </div>
        <div className="relative-image" data-aos="fade-left">
          <div className="project-absolute-image">
            <div className="project-box-image">
              <img src={project1} alt="projects"></img>
              <div className="absolute-project-text">
                <p>2021 Indonesia</p>
                <h3 className="heading-3">GKI Tegal City</h3>
              </div>
              <div className="absolute-project-preview">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus tempus.
                </p>
                <div className="absolute-project-arrow-box">
                  <div className="absolute-project-arrow-box-left">
                    <i className="fas fa-chevron-left"></i>
                  </div>
                  <div className="absolute-project-arrow-box-right">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
