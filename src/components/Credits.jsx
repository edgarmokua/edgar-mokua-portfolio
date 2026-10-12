import React from "react";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Credits.css";
import FadeInSection from "./FadeInSection";

const Credits = () => {
  return (
    <FadeInSection>
      <div id="contact">
        <div className="contact-content">
          <div className="contact-status">
            <span />
            Open to meaningful engineering conversations
          </div>
          <div className="contact-kicker">What should we build next?</div>
          <h2>Have a complex system to scale? Let&apos;s build it.</h2>
          <p>
            I&apos;m interested in backend, infrastructure, platform, and
            reliability engineering opportunities operating at global scale.
          </p>
          <div className="contact-actions">
            <a href="mailto:jamieedgar02@gmail.com" className="contact-email">
              <EmailRoundedIcon />
              Start a conversation
            </a>
            <a
              className="contact-social"
              href="https://github.com/edgarmokua"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon /> GitHub
            </a>
            <a
              className="contact-social"
              href="https://www.linkedin.com/in/edgarmokua/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
        </div>
        <div className="ending-credits">
          <div>Designed and built by Edgar Mokua.</div>
          <div>Nairobi, Kenya · © {new Date().getFullYear()}</div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default Credits;
