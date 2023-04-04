import React from 'react'
import silamaze from "../json/silamaze.json"
import { useContext } from 'react';
import {ShopContext} from "../context/cartContext"
import CartItems from './CartItems';
import { useNavigate } from 'react-router-dom';



function Cartitem({closekalata}) {
  const navigate = useNavigate() 
   


    const { cartItems,   } = useContext(ShopContext);
    // const totalAmount = getTotalCartAmount();
   
    return (
        
    <div>
        <div className='background'></div>
       
     <div className='cart'>
        <div className='kalata'>
        <h4> ჩემი კალათა</h4>
        <button  onClick={() => { closekalata(false)}} > &times; </button>

        </div>
 
    {silamaze.map((item) => {
     if (cartItems[item.id] !== 0) {
       return  <CartItems key={item.id} data={item} />;
     }
   })}
   
     
     
   <div className="checkout">
  <p> სულ:  </p>
  <button onClick={() => navigate("/")}> ყიდვა </button>
        
  
</div>
     
     

     </div>
    </div>
     
  )
}

export default Cartitem
