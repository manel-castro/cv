import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import me from "./../assets/images/me.jpeg";
import bgDark from "./../assets/images/bg-dark.png";
import bgLight from "./../assets/images/bg-light.png";
import { useStateContext } from "../context/context";
import { AudioPlayer } from "./AudioPlayer/AudioPlayer";

function Main() {
  const { darkMode: mode } = useStateContext();

  return (
    <div className="container w-full">
      <div className="flex w-full md:justify-around md:items-center gap-10 flex-col md:flex-row">
        <div className="about-section z-20">
          <div className="image-wrapper">
            <img src={me} alt="Avatar" loading="lazy" />
          </div>
          <div className="content">
            <div className="social_icons">
              <a
                href="https://github.com/manel-castro"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/manelcastro/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>

            <h1>Manel Castro</h1>
            <p>Full Stack Engineer</p>

            <div className="mobile_social_icons">
              <a
                href="https://github.com/manel-castro"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/manelcastro/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
        <div style={{ zIndex: 10 }}>
          <AudioPlayer />
        </div>
      </div>
    </div>
  );
}

export default Main;
