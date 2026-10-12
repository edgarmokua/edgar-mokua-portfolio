import React from "react";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import FadeInSection from "./FadeInSection";
import "../styles/Credentials.css";

const Credentials = () => (
  <section id="credentials">
    <FadeInSection>
      <div className="section-header" data-section="04">
        <span className="section-title">Education & leadership</span>
      </div>
      <div className="credentials-grid">
        <article className="credential-card">
          <SchoolRoundedIcon />
          <div>
            <span className="credential-label">Education</span>
            <h3>Jomo Kenyatta University of Agriculture and Technology</h3>
            <p>Bachelor of Science, Business Information Technology</p>
          </div>
        </article>
        <article className="credential-card">
          <VolunteerActivismRoundedIcon />
          <div>
            <span className="credential-label">Community leadership</span>
            <h3>GIVE fundraising campaign</h3>
            <p>
              Led a global ADC initiative that raised more than $26,500 and
              generated 738 volunteer hours.
            </p>
          </div>
        </article>
      </div>
    </FadeInSection>
  </section>
);

export default Credentials;
