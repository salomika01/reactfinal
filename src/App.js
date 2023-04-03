import React from "react";

import "./App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



import { Route, Routes } from "react-router-dom";
import Sachuqrebi from "./pages/Sachuqrebi";

import Lierac from "./pages/Lierac";


import Slogani from "./components/Slogani";
import Seconsection from "./components/Seconsection";
import ManuSection from "./components/ManuSection";


import Footer from "./components/Footer";
// import { useState } from "react";
import Cartitem from "./components/Cartitem";
import { ShopContextProvider } from "./context/cartContext";


function App() {
  
  return (
    

   <div className="App">
    <ShopContextProvider >
   <Slogani />
   <ManuSection  />
 
 <Routes>  
  <Route  path="/cart" element={<Cartitem />} />
  <Route path="Category/silamaze" element={  <Sachuqrebi />} />
  <Route path="Category/saxis-kanis-movla01" element={  <Lierac/>} />
  <Route path="/"  element={<Seconsection/>}/>
  
  
 </Routes>
      
 <Footer />
 </ShopContextProvider>
    
    </div>


      
      
   
      
      
      
      
      
      
      
      
      
     
      
    
    
  
    
  );
  
}

export default App;