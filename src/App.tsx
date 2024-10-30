import bgDark from "./assets/images/bg-dark.png";
import bgLight from "./assets/images/bg-light.png";
import { useEffect } from "react";
import {
  Expertise,
  Footer,
  Main,
  Navigation,
  Project,
  Timeline,
} from "./components";
import FadeIn from "./components/FadeIn";
import "./index.scss";

import { useStateContext } from "./context/context";
import "./localization/localization";
import { useWindowSize } from "./hooks/useWindowSize";
import { getIsPhone } from "./lib/deviceSize";

function App() {
  const { darkMode: mode, setDarkMode: setMode } = useStateContext();

  const { windowWidth } = useWindowSize();
  const isPhone = getIsPhone(windowWidth);

  const handleModeChange = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className={`main-container ${
        mode === "dark" ? "dark-mode" : "light-mode"
      }`}
      style={{ overflowX: "hidden" }}
    >
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      <FadeIn transitionDuration={700}>
        <div className="relative flex flex-col w-full items-center">
          {mode && (
            <img
              id="bg-image"
              src={mode === "dark" ? bgDark : bgLight}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                transform: "rotate(0deg)",

                ...(isPhone
                  ? {
                      transform: "rotate(70deg)",
                      top: 200,
                      left: -170,
                      minWidth: "200%",
                    }
                  : {}),
              }}
              alt="Avatar"
              loading="lazy"
            />
          )}
          <div className="z-20 relative max-w-[1500px]">
            <Main />
            <Expertise />
            <Timeline />
            <Project />
            {/* <Contact/> */}
          </div>
        </div>
      </FadeIn>
      <Footer />
    </div>
  );
}

export default App;
