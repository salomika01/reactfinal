import {FaAngleDown} from "react-icons/fa"

function Silamazedtlbtn({text}) {
  return (
    
    <div className="sidemanubox"> 
    
    <button className="dtlbtn" >
        <span className="btnttl">{text }</span>
         <FaAngleDown  />
   </button>
   <div className="underline"></div>
   </div>
  
  

  )
}

export default Silamazedtlbtn
