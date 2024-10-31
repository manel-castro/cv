import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import { useWindowSize } from "../hooks/useWindowSize";
import { getIsLessThan780px } from "../lib/deviceSize";
import me from "./../assets/images/me.jpeg";
import { AudioPlayer } from "./AudioPlayer/AudioPlayer";

function Main() {
  const { windowWidth } = useWindowSize();
  const isVertical = getIsLessThan780px(windowWidth);

  return (
    <div className="container w-full min-h-[600px]">
      <div
        style={{
          flexDirection: "column",
          gap: 100,
          paddingTop: 80,

          ...(isVertical
            ? {
                gap: 50,
              }
            : {}),
        }}
        className="flex w-full md:justify-around md:items-center gap-10 flex-col md:flex-row"
      >
        <div
          className="about-section z-20"
          style={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: 50,

            ...(isVertical
              ? {
                  flexDirection: "column",
                  gap: 0,
                }
              : {}),
          }}
        >
          <div
            className="image-wrapper"
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <img src={me} alt="Avatar" loading="lazy" />
          </div>
          <div
            className="content"
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
            }}
          >
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

            <h1
              style={{
                textAlign: "center",
              }}
            >
              Manel Castro
            </h1>
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

            <p
              style={{
                marginTop: 30,
                fontSize: "1rem",
              }}
            >
              Founded{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.restdali.com"
              >
                Restdali.com
              </a>
              .
            </p>
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
