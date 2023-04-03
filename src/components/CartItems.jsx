import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../context/cartContext';

function CartItems(props) {
    const {id, title, img, newprice, aldprice, link} = props.data;
    const { cartItems, addToCart,removeFromCart, updateCartItemCount} = useContext(ShopContext)
    return (
       
    <div className='wholecont'>
    <div  className="singleproduct">
    
    <Link   to={`/${link}`}> 
      
     <img className="singlepnj"
     src={img} alt="poto" />
     
    </Link>  
    
    
 <div className="info">
  <div className="pprices">
  <span className='new'>{newprice}</span>
  <span className='prew'>{aldprice}</span>
  </div>
  <span className="ptitle">
  {title}
  </span>
  
 </div>
 <div className='count'>
    <button onClick={() => removeFromCart(id)}  >-</button>
 <input className='countinpt' 
 value={cartItems[id]}  onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
<button onClick={() => addToCart(id)}>+</button>
</div>
 </div>
 
 
 
 
 </div>

    
  )
}

export default CartItems
