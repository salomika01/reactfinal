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
import CartContext from "./context/cartContext";
import { useState } from "react";


function App() {
  const [cartList, setCartList] = useState([]);

 
  return (
    
   <CartContext.Provider 
   value={{
    cart: cartList,
    setCart: setCartList
  }}>

  
    
    <div className="App">

      <Slogani />
       <Header />
       <Routes>    
        <Route path="Category/silamaze" element={ <Sachuqrebi />} />
        <Route path="Category/saxis-kanis-movla01" element={  <Lierac/>} />
       </Routes>
       <ManuSection />

       <Seconsection/>

      


    </div>
    
    </CartContext.Provider>
    
  );
  
}

export default App;