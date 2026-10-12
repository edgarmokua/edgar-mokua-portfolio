import React, { useState, useEffect, useRef } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/NavBar.css";

const sectionIds = [
  "intro",
  "about",
  "experience",
  "projects",
  "credentials",
  "contact",
];

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollPos = useRef(0);

  useEffect(() => {
    if (expanded) {
      scrollPos.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPos.current}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
  }, [expanded]);

  useEffect(() => {
    const updateScrollState = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(
        scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0,
      );

      const currentSection = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean)
        .reverse()
        .find((section) => section.getBoundingClientRect().top <= 140);

      setActiveSection(currentSection?.id ?? "intro");
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const navItems = [
    ["intro", "Home"],
    ["about", "About"],
    ["experience", "Experience"],
    ["projects", "Projects"],
    ["credentials", "Education"],
    ["contact", "Contact"],
  ];

  return (
    <Navbar
      fixed="top"
      expand="lg"
      className="navbar"
      data-bs-theme="dark"
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)}
    >
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
      <Container>
        <Navbar.Brand href="/#intro">EM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" onSelect={() => setExpanded(false)}>
            {navItems.map(([id, label]) => (
              <Nav.Link
                key={id}
                href={`/#${id}`}
                active={activeSection === id}
                aria-current={activeSection === id ? "page" : undefined}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
          <Nav className="ms-auto" onSelect={() => setExpanded(false)}>
            <Nav.Link
              href="mailto:jamieedgar02@gmail.com"
              aria-label="Email Edgar"
            >
              <EmailRoundedIcon style={{ fontSize: 20 }} />
            </Nav.Link>
            <Nav.Link
              href="https://github.com/edgarmokua"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Edgar on GitHub"
            >
              <GitHubIcon style={{ fontSize: 19 }} />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/edgarmokua/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Edgar on LinkedIn"
            >
              <LinkedInIcon style={{ fontSize: 21 }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
