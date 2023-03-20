import React from "react";

import "./App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Header from "./components/Header";

import { Route, Routes } from "react-router-dom";
import Sachuqrebi from "./pages/Sachuqrebi";

import Lierac from "./pages/Lierac";
import CartContext from "./context/cartContext";
import { useState,} from "react";
import Slogani from "./components/Slogani";
import Seconsection from "./components/Seconsection";
import ManuSection from "./components/sections/ManuSection";

import Footer from "./components/Footer";


function App() {


  const [cartList, setCartList] = useState([]);
 

 
  return (
    
   <CartContext.Provider 
   value={{
    cart: cartList,
    setCart: setCartList
  }}>

   <div className="App">
    
    </div>

       <Slogani />
       <Header />
       <ManuSection />
       
       <Routes>  
        
        <Route path="Category/silamaze" element={ <Sachuqrebi />} />
        <Route path="Category/saxis-kanis-movla01" element={  <Lierac/>} />
        <Route path="/"  element={<Seconsection/>}/>
        
        
       </Routes>
      
     
       <Footer />
    
    
    </CartContext.Provider>
    
  );
  
}

export default App;