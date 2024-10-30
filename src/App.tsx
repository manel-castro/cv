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

function App() {
  const { darkMode: mode, setDarkMode: setMode } = useStateContext();

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
    >
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      <FadeIn transitionDuration={700}>
        <Main />
        <Expertise />
        <Timeline />
        <Project />
        {/* <Contact/> */}
      </FadeIn>
      <Footer />
    </div>
  );
}

export default App;
