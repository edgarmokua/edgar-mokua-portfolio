import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

const About = () => {
  const technologies = [
    "C# / .NET",
    "Python",
    "C++ / C",
    "Java",
    "SQL",
    "TypeScript",
    "JavaScript",
    "Azure",
  ];

  return (
    <div id="about">
      <FadeInSection>
        <div className="section-header" data-section="01">
          <span className="section-title">About me</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            <p>
              I am a <b>Software Engineer II at Microsoft</b>, where I build
              distributed cloud systems and reliability platforms for
              large-scale Windows engineering. I specialize in backend
              infrastructure, monitoring, telemetry, regression detection,
              issue automation, and service health.
            </p>
            <p>Here are some technologies I have been working with:</p>
            <ul className="technology-list">
              {technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
            <p>
              Outside of work, I follow advances in technology, play video
              games, create short-form content, and occasionally participate in
              hackathons.
            </p>
          </div>
          <div className="about-photo">
            <div className="about-photo-frame">
              <img src="/assets/james-mokua.png" alt="Edgar Mokua" />
            </div>
            <span className="about-photo-label">Nairobi, Kenya</span>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;
