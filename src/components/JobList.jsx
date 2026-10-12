import React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import FadeInSection from "./FadeInSection";

function TabPanel(props) {
  const { children, value, index, isMobile, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={isMobile ? `full-width-tabpanel-${index}` : `vertical-tabpanel-${index}`}
      aria-labelledby={isMobile ? `full-width-tab-${index}` : `vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 2, sm: 3 } }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  isMobile: PropTypes.bool
};

function a11yProps(index, isMobile) {
  if (isMobile) {
    return {
      id: "full-width-tab-" + index,
      "aria-controls": "full-width-tabpanel-" + index,
    };
  } else {
    return {
      id: "vertical-tab-" + index,
      "aria-controls": "vertical-tabpanel-" + index,
    };
  }
}

const JobList = () => {
  const [value, setValue] = React.useState(0);
  const [expandedRoles, setExpandedRoles] = React.useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const experienceItems = [
    {
      company: "Microsoft",
      location: "Nairobi, Kenya",
      roles: [
        {
          jobTitle: "Software Engineer II",
          duration: "SEP 2025 - PRESENT",
          desc: [
            "Architected a centralized cloud monitoring and alerting platform spanning approximately 2,000 production workflows and 15 services, reducing operational triage time from 6 hours to 10 minutes (97%) and enabling proactive detection of failures across large-scale engineering systems.",
            "Reduced Azure infrastructure spend from approximately $170K/month to $35K/month (~79%) through cloud infrastructure optimization and improved cost visibility.",
            "Reduced regression-detection SLA from 3 days to 6 hours (92%) by designing automated telemetry analysis, regression detection, and issue-promotion workflows across large-scale Windows engineering systems.",
            "Increased automated regression issues captured by 233%, from approximately 30 to 100 per day, by eliminating manual promotion bottlenecks and automating issue creation and routing.",
            "Designed and led validation and orchestration infrastructure supporting automated testing, issue generation, verification, auditability, and controlled rollout of production reliability workflows.",
            "Reduced production issue-filing triage from 3 days to 5 minutes (99.9%) by redesigning a large-scale automated issue ingestion and processing pipeline with monitoring, logging, retry, and validation capabilities.",
            "Increased automated failure-classification coverage by 20% by implementing an ML-based classification system for previously unclassified reliability failures.",
            "Designed and implemented a dynamic issue-creation platform that increased issue creation from 20 to 80 per week for participating engineering teams and automated subsequent issue routing and promotion.",
            "Reduced batch processing and issue-update latency from 24 hours to 4 hours (83%) by redesigning and migrating critical reliability workflows to a scalable batch-processing architecture.",
            "Recovered up to 2 GB of previously inaccessible reliability data by identifying and correcting a data-orchestration issue during migration from a deprecated internal data-sharing platform, improving downstream data completeness and continuity.",
            "Served as a technical escalation point for distributed pipeline failures, regression analysis, production incidents, and reliability automation, providing root-cause analysis and architecture recommendations to engineers and stakeholders.",
            "Led architecture discussions across Nairobi and Redmond, influencing system design, scalability, extensibility, and long-term operational reliability.",
          ],
        },
        {
          jobTitle: "Software Engineer",
          duration: "AUG 2024 - AUG 2025",
          desc: [
            "Reduced missing or delayed reliability signals by approximately 30% by hardening near-real-time telemetry ingestion and attribution pipelines and improving data freshness.",
            "Reduced false-positive regressions by approximately 20% through automated signal-quality evaluation and filtering of low-confidence telemetry.",
            "Designed validation guardrails across batch and near-real-time processing paths to prevent data misattribution and invalid analysis.",
            "Built and operated production cloud data pipelines using C#, .NET, Azure Data Factory, Azure Functions, Azure Cosmos DB, Azure Event Hubs, ADLS Gen2, Logic Apps, and Kusto / Azure Data Explorer.",
            "Resolved 40+ production incidents, diagnosing distributed pipeline failures, stale data, synchronization issues, and service-health problems.",
            "Supported migration of 1,000+ production reliability workflows between internal infrastructure platforms.",
            "Participated in on-call operations and restored 99% of affected workloads during a major service outage, coordinating recovery with partner engineering teams.",
            "Reviewed and approved 15+ pull requests, providing feedback on architecture, implementation, edge cases, and test coverage.",
          ],
        },
      ],
    },
    {
      company: "Vivo Energy Kenya",
      location: "Nairobi, Kenya",
      roles: [
        {
          jobTitle: "Software Engineer, Contract",
          duration: "DEC 2023 - JUN 2024",
          desc: [
            "Automated and optimized business logic supporting A/B testing, auto-targeting, and multivariate experimentation.",
            "Implemented a web-based reporting platform for retail operations, contributing to a 20% reduction in customer complaints.",
          ],
        },
      ],
    },
    {
      company: "M-Builds",
      location: "Nairobi, Kenya",
      roles: [
        {
          jobTitle: "Software Engineer",
          duration: "JAN 2022 - DEC 2023",
          desc: [
            "Led design and development of enterprise microservices using C#, .NET, Azure, Cosmos DB, Azure Functions, Key Vault, and Microsoft Graph.",
            "Designed scalable APIs and background workers for proprietary license management, serving thousands of license requests daily.",
          ],
        },
      ],
    },
    {
      company: "Arklight International",
      location: "Nairobi, Kenya",
      roles: [
        {
          jobTitle: "Software Engineer, Contract",
          duration: "APR 2022 - FEB 2023",
          desc: [
            "Developed enterprise management applications using Java, React, AngularJS, AWS, and DynamoDB.",
          ],
        },
      ],
    },
    {
      company: "Meliora Technologies Limited",
      location: "Nairobi, Kenya",
      roles: [
        {
          jobTitle: "Software Engineer, Contract",
          duration: "SEP 2022 - DEC 2022",
          desc: [
            "Led engineering of a fintech transaction analytics dashboard used by company leadership to analyze customer purchasing behavior.",
            "Owned commerce cancellation, return, and exchange workflows across web and mobile platforms.",
          ],
        },
      ],
    },
    {
      company: "Freelance",
      roles: [
        {
          jobTitle: "Software Development Engineer",
          duration: "JUL 2021 - JAN 2022",
          desc: [
            "Developed enterprise web and e-commerce applications using C#, .NET, MSSQL, Node.js, React, Redux, and jQuery.",
          ],
        },
      ],
    },
    {
      company: "Eliminist Devs",
      location: "Nairobi, Kenya",
      roles: [
        {
          jobTitle: "Software Engineer Intern",
          duration: "SEP 2020 - JUL 2021",
          desc: [
            "Developed web applications using React, TypeScript, Node.js, and Fluent UI.",
          ],
        },
      ],
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleRole = (roleKey) => {
    setExpandedRoles((current) => ({
      ...current,
      [roleKey]: !current[roleKey],
    }));
  };

  return (
    <Box className="experience-shell" sx={{
      flexGrow: 1, 
      bgcolor: "transparent", 
      display: "flex", 
      flexDirection: isMobile ? "column" : "row",
      height: "auto",
      minHeight: 300
    }}>
      <Tabs
        orientation={!isMobile ? "vertical" : "horizontal"}
        variant="scrollable"
        scrollButtons="auto"
        value={value}
        onChange={handleChange}
        sx={{ 
          borderRight: isMobile ? 0 : 1, 
          borderBottom: isMobile ? 1 : 0,
          borderColor: "var(--lightest-navy)",
          "& .MuiTabs-indicator": {
            backgroundColor: "var(--green-bright)"
          },
          "& .MuiTabs-flexContainer": {
            borderBottom: isMobile ? "1px solid var(--lightest-navy)" : "none"
          }
        }}
      >
        {experienceItems.map((experience, i) => (
          <Tab 
            key={experience.company}
            label={
              <span className="company-tab-label">
                <span className="company-monogram">
                  {experience.company
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                {experience.company}
              </span>
            }
            {...a11yProps(i, isMobile)} 
            sx={{
              color: "var(--slate)",
              fontFamily: "NTR",
              fontSize: "14px",
              textAlign: isMobile ? "center" : "left",
              alignItems: isMobile ? "center" : "flex-start",
              textTransform: "none",
              padding: "10px 20px",
              minHeight: "48px",
              minWidth: isMobile ? "120px" : "auto",
              "&.Mui-selected": {
                color: "var(--green-bright)"
              },
              "&:hover": {
                color: "var(--green-bright)",
                backgroundColor: "var(--green-tint)"
              }
            }}
          />
        ))}
      </Tabs>
      <Box sx={{ flexGrow: 1 }}>
        {experienceItems.map((experience, i) => (
          <TabPanel key={experience.company} value={value} index={i} isMobile={isMobile}>
            <div className="career-timeline">
              {experience.roles.map((role, roleIndex) => {
                const roleKey = `${experience.company}-${role.jobTitle}`;
                const isExpanded = expandedRoles[roleKey];
                const hasMore = role.desc.length > 5;
                const visibleDescriptions =
                  hasMore && !isExpanded ? role.desc.slice(0, 5) : role.desc;

                return (
                  <div className="job-role" key={roleKey}>
                    <span className="timeline-marker" aria-hidden="true" />
                    <div className="job-heading">
                      <div>
                        <span className="joblist-job-title">{role.jobTitle}</span>
                        <span className="joblist-job-company">
                          {" "}@ {experience.company}
                        </span>
                      </div>
                      <div className="job-meta">
                        <span className="joblist-duration">{role.duration}</span>
                        {experience.location && (
                          <span className="joblist-location">{experience.location}</span>
                        )}
                      </div>
                    </div>
                    <ul className="job-description">
                      {visibleDescriptions.map((descItem, descIndex) => (
                        <FadeInSection
                          key={descItem}
                          delay={`${(roleIndex + descIndex + 1) * 60}ms`}
                        >
                          <li>{descItem}</li>
                        </FadeInSection>
                      ))}
                    </ul>
                    {hasMore && (
                      <button
                        className="role-toggle"
                        type="button"
                        onClick={() => toggleRole(roleKey)}
                        aria-expanded={Boolean(isExpanded)}
                      >
                        {isExpanded
                          ? "Show fewer achievements"
                          : `View ${role.desc.length - 5} more achievements`}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
};

export default JobList;
