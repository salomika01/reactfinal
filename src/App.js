import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slogani from "./components/Slogani";
import Header from "./components/Header";
import ManuSection from "./components/ManuSection"






function App() {

  return (
    
    <div className="App">
      <Slogani />
       <Header />
       <ManuSection />
      
      
     
    </div>
  );
}

export default App;