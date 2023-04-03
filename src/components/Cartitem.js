import React from 'react'
import silamaze from "../json/silamaze.json"
import { useContext } from 'react';
import {ShopContext} from "../context/cartContext"
import CartItems from './CartItems';
import { useNavigate } from 'react-router-dom';



function Cartitem({closebsk}) {
  const navigate = useNavigate()  

    const { cartItems,   } = useContext(ShopContext);
    // const totalAmount = getTotalCartAmount();
   
    return (
        
    <div>
        <div className='background'></div>
       
     <div className='cart'>
        <div className='kalata'>
        <h2>კალათა</h2>
        <button onClick={() => closebsk(false)}
 >&times;</button>

        </div>
 
    {silamaze.map((item) => {
     if (cartItems[item.id] !== 0) {
       return <CartItems key={item.id} data={item} />;
     }
   })}
   
     
     
     
     
     

     </div>

    
        <div className="checkout">
          <p> სულ:  </p>
          <button onClick={() => navigate("/")}> ყიდვა </button>
        
          
        </div>
     
     
     


    </div>
     
  )
}

export default Cartitem
