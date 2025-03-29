/* eslint-disable no-console */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import enGB from "./en-GB";

export default (locale: string): Promise<unknown> => {
  if (!i18n.isInitialized) {
    return i18n.use(initReactI18next).init({
      fallbackLng: "en",
      debug: false, // change to true to see logs
      lng: locale,
      resources: {
        en,
        "en-GB": enGB,
      },
      interpolation: {
        escapeValue: false,
      },
      saveMissing: true,
      missingKeyHandler: (lngs, ns, key) => {
        const [group, ...rest] = key.split(".");

        console.error(
          `Missing translation:      
            Languages: ${lngs}
            Namespace: ${ns}
            Group: ${group}
            Key: ${rest.join(".")}`
        );
      },
    });
  } else {
    i18n.changeLanguage(locale);
    return Promise.resolve();
  }
};

