import React from 'react'
import { Link } from 'react-router-dom';
import {FaRegHeart} from "react-icons/fa"
import {FaShoppingCart} from "react-icons/fa"
import {ShopContext} from "../context/cartContext"
import { useContext } from 'react';

function Cards(props) {
  const {id, title, img, newprice, aldprice, link} = props.data;
  const {addToCart, cartItems} = useContext(ShopContext)

  const cartItemCount = cartItems[id];
  return (
    <div  className="singlprd">
      <div className="favcont">
      <Link   to={`/${link}`}> 
        
       <img className="slmpnj"
       src={img} alt="poto" />
       
      </Link>  
       <div className="favicons">
        <button 
         className="favithembtn"> <FaRegHeart className="fav"/></button>
       <button onClick={() => addToCart(id)}
       className="bsktithembtn"><FaShoppingCart  className="bsk"/> 
        {cartItemCount > 0 && <> ({cartItemCount})</>}
       </button>
          
     </div>
      </div>
   <div className="info">
    <div className="prices">
    <span>{newprice}</span>
    <span>{aldprice}</span>
    </div>
    <span className="producttitle">
    {title}
    </span>
  
   </div>
   </div>
  )
}

export default Cards
