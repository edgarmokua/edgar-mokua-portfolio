import React from "react";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import FadeInSection from "./FadeInSection";
import "../styles/SelectedProjects.css";

const projects = [
  {
    title: "Fightfu",
    description:
      "A two-player, browser-based fighting game built with JavaScript.",
    stack: ["JavaScript", "HTML", "CSS"],
    repository: "https://github.com/JamesMokua/fightfu",
    demo: "https://fightfu.netlify.app/",
    image: "/assets/fightfu.png",
  },
  {
    title: "Curved Carousel",
    description:
      "An image carousel with curved edges and a continuous looping interaction.",
    stack: ["React", "CSS"],
    repository: "https://github.com/JamesMokua/curved-carousel",
    demo: "https://curvedcarousel.netlify.app/",
    image: "/assets/curved-carousel.png",
  },
  {
    title: "Self-Driving Car",
    description:
      "A driving simulation that explores neural networks and machine-learning concepts.",
    stack: ["JavaScript", "Neural networks", "Simulation"],
    repository: "https://github.com/JamesMokua/self-driving-car",
  },
  {
    title: "GPT-3 Twitter Bot",
    description:
      "An automated bot that generates and schedules topic-based posts using GPT-3.",
    stack: ["Node.js", "Firebase", "Twitter API", "GPT-3"],
    repository: "https://github.com/JamesMokua/twitter-bot",
  },
  {
    title: "Sauti",
    description:
      "A React Native music player with playback, skipping, seeking, and queue controls.",
    stack: ["React Native", "Redux", "Expo"],
    repository: "https://github.com/JamesMokua/sauti",
  },
  {
    title: "Sayari",
    description:
      "An astronomy application that presents space and planetary data from NASA APIs.",
    stack: ["React", "Fluent UI", "NASA API"],
    repository: "https://github.com/JamesMokua/Sayari",
  },
];

const SelectedProjects = () => (
  <section id="projects">
    <FadeInSection>
      <div className="section-header" data-section="03">
        <span className="section-title">Selected projects</span>
      </div>
      <div className="projects-heading-row">
        <p>
          Earlier explorations in interactive experiences, mobile development,
          automation, and applied machine learning.
        </p>
        <a
          href="https://github.com/edgarmokua"
          target="_blank"
          rel="noopener noreferrer"
        >
          Current GitHub <OpenInNewRoundedIcon />
        </a>
      </div>
      <div className="selected-projects-grid">
        {projects.map((project, index) => (
          <FadeInSection key={project.title} delay={`${index * 70}ms`}>
            <article
              className={`selected-project-card ${index < 2 ? "featured-project" : ""}`}
            >
              <div className="project-visual">
                <div className="browser-chrome">
                  <span />
                  <span />
                  <span />
                  <small>{project.demo ? "Live project" : "Source project"}</small>
                </div>
                {project.image ? (
                  <img
                    className="project-preview"
                    src={project.image}
                    alt={`${project.title} preview`}
                  />
                ) : (
                  <div className="project-placeholder" aria-hidden="true">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{project.title}</strong>
                  </div>
                )}
              </div>
              <div className="project-card-body">
                <div className="project-card-header">
                  <div className="project-type">
                    <FolderOpenRoundedIcon className="project-folder" />
                    <span>{index < 2 ? "Featured build" : "Engineering project"}</span>
                  </div>
                  <div className="project-links">
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code`}
                    >
                      <GitHubIcon />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                      >
                        <OpenInNewRoundedIcon />
                      </a>
                    )}
                  </div>
                </div>
                <span className="project-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-stack">
                  {project.stack.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            </article>
          </FadeInSection>
        ))}
      </div>
    </FadeInSection>
  </section>
);

export default SelectedProjects;
