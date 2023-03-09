import React from "react";

import "./App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slogani from "./components/Slogani";
import Header from "./components/Header";
import ManuSection from "./components/ManuSection"
import { Route, Routes } from "react-router-dom";
import Sachuqrebi from "./pages/Sachuqrebi";
import Seconsection from "./components/Seconsection";
import Lierac from "./pages/Lierac";






function App() {

  return (
    <div className="App">
      <Slogani />
       <Header />
       <Routes>    
        <Route path="Category/silamaze" element={ <Sachuqrebi />} />
        
       </Routes>
       <ManuSection />

       <Seconsection/>

       <Lierac/>
      
      
     
    </div>
  );
}

export default App;