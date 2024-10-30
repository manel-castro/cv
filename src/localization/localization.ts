import i18n from "i18next";

import Backend from "i18next-chained-backend";

import { resources } from "./resources";
import LocalStorageBackend from "i18next-localstorage-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

/**
 * i18next localization
 */

if (localStorage.getItem("i18nextLng") === null) {
  localStorage.setItem("i18nextLng", "es");
}

i18n
  .use(Backend) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: resources,

    fallbackLng: "es",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },

    backend: {
      backends: [LocalStorageBackend],
    },
  });

/**
 * Server localization
 */
export interface Language {
  lang: string;
  text: string;
}

export const I18NextLanguagesAvailable = [
  {
    lang: "es",
    text: "Español",
  },
  {
    lang: "en",
    text: "English",
  },
];
