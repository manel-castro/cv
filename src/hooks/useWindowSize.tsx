import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    windowHeight: number;
    windowWidth: number;
  }>({
    windowHeight: 0,
    windowWidth: 0,
  });

  useEffect(() => {
    const resizeCallback = () => {
      setWindowSize({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
      });
    };

    resizeCallback();
    window.addEventListener("resize", resizeCallback);

    return () => window.removeEventListener("resize", resizeCallback);
  }, []);

  return windowSize;
};
