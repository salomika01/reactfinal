
import {FaAngleDown} from "react-icons/fa"

function Silamazedtlbtn({ text, ...props}) {
  return (
    
    <div className="sidemanubox"> 
    
    <button {...props}
     className="dtlbtn" >
        <span className="btnttl">{text }</span>
         <FaAngleDown  />
   </button>
   <div className="underline"></div>
   </div>
  
  

  )
}

export default Silamazedtlbtn
