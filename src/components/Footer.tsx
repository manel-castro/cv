import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Footer.scss";
import { useStateContext } from "../context/context";

function Footer() {
  const { darkMode } = useStateContext();

  const color = darkMode === "dark" ? "#fff" : "#000";

  return (
    <footer>
      <div>
        <a
          href="https://github.com/manel-castro"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon style={{ color }} />
        </a>
        <a
          href="https://www.linkedin.com/in/manelcastro/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon style={{ color }} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
