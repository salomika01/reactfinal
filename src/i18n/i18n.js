import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: require('./en.json')
    },
    ka: {
      translation: require('./ka.json')
    }
  },
  lng: "ka", 
  fallbackLng: "en",

  interpolation: {
    escapeValue: false
  }
});

export default i18n;