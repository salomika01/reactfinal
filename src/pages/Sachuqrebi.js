

import Silamazedtlbtn from "../components/buttons/Silamazedtlbtn"
import silamaze from "../json/silamaze.json"
import Cards from "./Cards"


function Sachuqrebi() {


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
      {
        silamaze.map((item)=>
         <Cards key={item.id}  
         data={item}
         /> 
         )
      }

      </div>
    </section>
  )
}

export default Sachuqrebi 
