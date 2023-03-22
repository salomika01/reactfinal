import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: require('../i18n/en.json')
    },
    ka: {
      translation: require('../i18n/ka.json')
    }
  },
  lng: "ka", 
  fallbackLng: "en",

  interpolation: {
    escapeValue: false
  }
});




function Slogani( ) {
   const { t } = useTranslation();
   const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
      console.log('salo')
    }
  
  
 return (
  
    <div className="slogani">
    <h5 >
      {t(" Free Shipping | Receive the order in Tbilisi in 3 hours, at your door")}
      
      
   </h5>
    
    
    <button onClick={() => changeLanguage('ka')}>qartuli</button>
    <button onClick={() => changeLanguage('en')}>english</button>
    
  
      </div>
  )
}

export default Slogani
