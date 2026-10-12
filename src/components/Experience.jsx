import React from "react";
import JobList from "./JobList";
import "../styles/Experience.css";
import FadeInSection from "./FadeInSection";

const Experience = () => {
  return (
    <div id="experience">
      <FadeInSection>
        <div className="section-header" data-section="02">
          <span className="section-title">Experience</span>
        </div>
        <JobList />
      </FadeInSection>
    </div>
  );
};

export default Experience;
