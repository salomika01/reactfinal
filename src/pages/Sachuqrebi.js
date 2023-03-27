
import { Link } from "react-router-dom"
import Silamazedtlbtn from "../components/buttons/Silamazedtlbtn"
import silamaze from "../json/silamaze.json"
import {FaRegHeart} from "react-icons/fa"
import {FaShoppingCart} from "react-icons/fa"
import CartContext from "../context/cartContext";
import { useContext } from "react";




function Sachuqrebi() {

  const { cart, setCart } = useContext(CartContext);
  console.log(cart);

  function clicked () {
    return(
      alert('funcion is clicked')
    )
  }


  return (
    <section className="wholeconteiner">
      <div className="impbtns">
        <h3 className="title" >დამატენიანებელი</h3>
        <Silamazedtlbtn onClick={clicked}  text="ფასი"/>
        <Silamazedtlbtn  text="ბრენდი"/>
        <Silamazedtlbtn  text="კანის ტიპი"/>
        <Silamazedtlbtn  text="მზისგან დაცვა"/>
        <Silamazedtlbtn  text="სქესი"/>
        
      </div>
      <div className="movlaconteiner" >
        {silamaze.map((item) => {
          return( 
            
             <div key={item.id}
           
              className="singlprd">
                <div className="favcont">
                <Link   to={`/${item.link}`}> 
                  
                 <img className="slmpnj"
                 src={item.img} alt="poto" />
                 
                </Link>  
                 <div className="favicons">
                  <button 
                   className="favithembtn"> <FaRegHeart className="fav"/></button>
                 <button  onClick={() => setCart([...cart, item])}
                 className="bsktithembtn"><FaShoppingCart  className="bsk"/> </button>
                    
               </div>
                </div>
             <div className="info">
              <div className="prices">
              <span>{item.newprice}</span>
              <span>{item.aldprice}</span>
              </div>
              <span className="producttitle">
              {item.title}
              </span>
            
             </div>
             </div>
           
           
          )
           
          
        })}
      </div>
    </section>
  )
}

export default Sachuqrebi 
