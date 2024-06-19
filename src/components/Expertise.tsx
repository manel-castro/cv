import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faDocker } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SASS",
  "React",
  "React Native",
  "Angular",
  "Vue",
];

const labelsSecond = ["Node JS", "Express", "SQL", "PostgreSQL", "Postman"];

const labelsThird = [
  "Git",
  "GitHub Actions",
  "Docker",
  "Azure",
  "Linux",
  "Puppeteer",
  "Selenium",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Front-End Web Development</h3>
            <p>
              I have built a diverse array of web applications from scratch
              implementing modern technologies such as React, React Native,
              Angular and Vue. I have a strong proficiency in Agile development.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDatabase} size="3x" />
            <h3>Back-End Development</h3>
            <p>
              I developed back-end applications from scratch using Node JS,
              Kubernetes and Docker. I'm proficient using Express and setting up
              Middlewares. I used message brokers like Nats or RabbitMQ.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>DevOps & Automation</h3>
            <p>
              Once the application is built, I help setting up DevOps testing,
              CI/CD pipelines, and deployment automation to support the
              successful Go-Live.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
