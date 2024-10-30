import React from "react";

import "../assets/styles/Project.scss";
import { PROJECTS } from "../data/projects";
import { useTranslation } from "react-i18next";

function Project() {
  const { t } = useTranslation();

  return (
    <div className="projects-container" id="projects">
      <h1>{t("personal-projects")}</h1>
      <div className="projects-grid">
        {Object.values(PROJECTS).map((project) => (
          <div className="project">
            <a href={project.link} target="_blank" rel="noreferrer">
              <img
                src={project.image}
                className="zoom"
                alt="thumbnail"
                width="100%"
              />
            </a>
            <a href={project.link} target="_blank" rel="noreferrer">
              <h2>{t(project.title)}</h2>
            </a>
            <p>{t(project.description)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
