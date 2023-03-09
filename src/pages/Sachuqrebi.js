
import { Link } from "react-router-dom"
import Silamazedtlbtn from "../components/buttons/Silamazedtlbtn"
import silamaze from "../json/silamaze.json"
import {FaRegHeart} from "react-icons/fa"
import {FaShoppingCart} from "react-icons/fa"





function Sachuqrebi() {
  return (
    <section className="wholeconteiner">
      <div className="impbtns">
        <h3 className="title" >დამატენიანებელი</h3>
        <Silamazedtlbtn text="ფასი"/>
        <Silamazedtlbtn  text="ბრენდი"/>
        <Silamazedtlbtn  text="კანის ტიპი"/>
        <Silamazedtlbtn  text="მზისგან დაცვა"/>
        <Silamazedtlbtn  text="სქესი"/>
        
      </div>
      <div className="movlaconteiner" >
        {silamaze.map((item) => {
          return( 
            
             <Link key={item.id}
              className="singlprd">
                <div className="favcont">
                <div> 
                 <img className="slmpnj"
                 src={item.img} alt="poto" />
                  </div>  
                 <div className="favicons">
                  <FaRegHeart className="fav"/>
                   <FaShoppingCart  className="bsk"/>  
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
             </Link>
           
           
          )
           
          
        })}
      </div>
    </section>
  )
}

export default Sachuqrebi 
