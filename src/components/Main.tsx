import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import me from "./../assets/images/me.jpeg";
import bgDark from "./../assets/images/bg-dark.png";
import bgLight from "./../assets/images/bg-light.png";
import { useStateContext } from "../context/context";

function Main() {
  const { darkMode: mode } = useStateContext();

  return (
    <div className="container">
      <div className="about-section">
        {mode && (
          <img
            src={mode === "dark" ? bgDark : bgLight}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
            }}
            alt="Avatar"
            loading="lazy"
          />
        )}
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
    </div>
  );
}

export default Main;
