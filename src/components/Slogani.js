import i18n from "../i18n/i18n";
import { useTranslation, } from "react-i18next";
import { useState, useEffect } from "react";

function Slogani( ) {
  const { t } = useTranslation();
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    changeLanguage(language);
  }, [language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  
 return (
  
    <div className="slogani">
    <h5 >
      {t("Free Shipping")}
      
      
   </h5>
    
    
   
   
   
  <label className="switch" >
  <button className="btn"
  onClick={() =>  language === "en" ? setLanguage("ka") : setLanguage("en")} ></button>
  <input type="checkbox" />
  <span className="slider" />
  </label>          
  
      </div>
  )
}

export default Slogani
