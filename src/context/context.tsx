import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { LOCALSTORAGE_DARK_MODE } from "../config/constants";

export type DarkMode = "light" | "dark" | undefined;

type InitialState = {
  darkMode: DarkMode;
  setDarkMode: (newDarkMode: DarkMode) => void;
};

const initialState = {
  darkMode: undefined,
  setDarkMode: () => {},
};

const StateContext = createContext<InitialState>(initialState);

export const useStateContext = () => {
  return useContext(StateContext);
};

export const ContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [darkMode, _setDarkMode] = useState<DarkMode>();

  const setDarkMode = (newDarkMode: DarkMode) => {
    if (!newDarkMode) return;

    localStorage.setItem(LOCALSTORAGE_DARK_MODE, newDarkMode);

    _setDarkMode(newDarkMode);
  };

  useEffect(() => {
    const storedDarkMode = localStorage.getItem(
      LOCALSTORAGE_DARK_MODE
    ) as DarkMode;

    if (!storedDarkMode) {
      setDarkMode("dark");
    } else {
      setDarkMode(storedDarkMode);
    }
  }, []);

  const state = {
    darkMode,
    setDarkMode,
  };

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};
