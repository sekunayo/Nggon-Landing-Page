import React from "react";
import service1 from "../../assets/images/concepting.jpg";
function Project() {
  return (
    <div className="project">
      <div className="project-box">
        <div className="project-box-text">
          <h3 className="heading-3">Project Completed</h3>
          <p>
            This is a project we have worked on as professionally as possible so
            that our customers are very satisfied
          </p>
        </div>
        <div className="project-box-image">
          <img src={service1} alt="projects"></img>
          <div className="absolute-project-text">
            <p>2021 Indonesia</p>
            <h3 className="heading-3">GKI Tegal City</h3>
          </div>
          <div className="absolute-project-preview">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              tempus.
            </p>
            <div className="absolute-project-arrow-box">
              <div className="absolute-project-arrow-box-left">
                <i class="fas fa-chevron-left"></i>
                {/* <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 443.52 443.52"
                  // style="enable-background:new 0 0 443.52 443.52;"
                >
                  <g>
                    <g>
                      <path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8    c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712    L143.492,221.863z" />
                    </g>
                  </g>
                </svg> */}
              </div>
              <div className="absolute-project-arrow-box-right">
                <i class="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
