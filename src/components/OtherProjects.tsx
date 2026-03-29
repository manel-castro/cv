import React from "react";
import "../assets/styles/Expertise.scss";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "../hooks/useWindowSize";
import { getIsPhone } from "../lib/deviceSize";
import { useStateContext } from "../context/context";
import CompressedImage from "./CompressedImage";

function OtherProjects() {
  const { t } = useTranslation();
  const { darkMode } = useStateContext();
  const { windowWidth } = useWindowSize();
  const isPhone = getIsPhone(windowWidth);

  const items = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div
      className="container"
      id="projects"
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
        <h1>{t("personal-projects")}</h1>
        <div className="skills-grid other-grid">
          {items.map((i) => {
            const title = t(`other-${i}-title`);
            const isDomain =
              typeof title === "string" &&
              title.trim().toLowerCase().endsWith(".com");

            return (
              <div className="skill" key={i}>
                <CompressedImage
                  src={`/assets/${(() => {
                    switch (i) {
                      case 1:
                        return "locationdatingfree.png";
                      case 2:
                        return "transparent.png";
                      case 3:
                        return "consumer-list.png";
                      case 4:
                        return "europeforpalestine.png";
                      case 5:
                        return "omp.jpg";
                      case 6:
                        return "goil.jpg";
                      case 7:
                        return "atlabs.jpg";
                      default:
                        return "";
                    }
                  })()}`}
                  alt={t(`other-${i}-title`)}
                  style={{
                    width: 80,
                    height: 80,
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                  loading="lazy"
                  quality={0.7}
                  maxWidth={240}
                />
                <h3>
                  {isDomain ? (
                    <a
                      href={`https://${(title as string).trim()}`}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: darkMode === "dark" ? "#ffffff" : undefined,
                        textDecoration: "underline",
                      }}
                    >
                      {title}
                    </a>
                  ) : (
                    title
                  )}
                </h3>
                <p>{t(`other-${i}-description`)}</p>
                {i === 2 && (
                  <div className="links">
                    <a
                      href={t("other-2-link-play")}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: darkMode === "dark" ? "#ffffff" : undefined,
                        textDecoration: "underline",
                      }}
                    >
                      Google Play
                    </a>
                    <span> • </span>
                    <a
                      href={t("other-2-link-appstore")}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: darkMode === "dark" ? "#ffffff" : undefined,
                        textDecoration: "underline",
                      }}
                    >
                      App Store
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OtherProjects;
