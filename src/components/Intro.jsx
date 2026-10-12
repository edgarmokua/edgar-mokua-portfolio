import React from "react";
import "../styles/Intro.css";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import FadeInSection from "./FadeInSection";

const Intro = () => {
  return (
    <div id="intro">
      <div className="intro-block">
        <FadeInSection>
          <div className="intro-eyebrow">
            <span className="availability-dot" />
            Software Engineer II at Microsoft
          </div>
          <h1 className="intro-title">
            Edgar <span className="intro-name">Mokua.</span>
          </h1>
          <h2 className="intro-subtitle">
            I build reliable cloud systems at scale.
          </h2>
          <div className="intro-desc">
            Distributed systems, cloud infrastructure, reliability engineering,
            and automation for production platforms that support large-scale
            Windows engineering.
          </div>
          <div className="intro-actions">
            <a href="mailto:jamieedgar02@gmail.com" className="intro-contact">
              <EmailRoundedIcon />
              Get in touch
            </a>
            <a
              href="/#experience"
              className="intro-secondary"
            >
              View experience
              <ArrowForwardRoundedIcon />
            </a>
          </div>
          <div className="intro-meta">
            <span>Distributed systems</span>
            <span>Cloud infrastructure</span>
            <span>Reliability engineering</span>
          </div>
        </FadeInSection>
      </div>
      <a className="intro-scroll-cue" href="/#about" aria-label="Scroll to About">
        <span>Explore</span>
        <i />
      </a>
    </div>
  );
};

export default Intro;
