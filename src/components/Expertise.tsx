import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faDocker } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "../hooks/useWindowSize";
import { getIsPhone } from "../lib/deviceSize";
import { useStateContext } from "../context/context";

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
  "Kubernetes",
  "Azure",
  "Google Cloud",
  "Linux",
  "Puppeteer",
  "Selenium",
];

function Expertise() {
  const { t } = useTranslation();

  const { darkMode } = useStateContext();

  const { windowWidth } = useWindowSize();
  const isPhone = getIsPhone(windowWidth);

  return (
    <div
      className="container"
      id="expertise"
      style={
        isPhone
          ? {}
          : {
              backgroundColor:
                darkMode === "dark"
                  ? "rgba(41, 41, 41, 0.4)"
                  : "rgba(192, 192, 192, 0.3)",
              backdropFilter: "blur(2px)",
              borderRadius: 40,
            }
      }
    >
      <div className="skills-container">
        <h1>{t("expertise")}</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>{t("expertise-1-title")}</h3>
            <p>{t("expertise-1-description")}</p>
            <div className="flex-chips">
              <span className="chip-title">{t("tech-stack")}:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDatabase} size="3x" />
            <h3>{t("expertise-2-title")}</h3>
            <p>{t("expertise-2-description")}</p>
            <div className="flex-chips">
              <span className="chip-title">{t("tech-stack")}:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>{t("expertise-3-title")}</h3>
            <p>{t("expertise-3-description")}</p>
            <div className="flex-chips">
              <span className="chip-title">{t("tech-stack")}:</span>
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
