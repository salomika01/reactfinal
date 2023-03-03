
import { Link } from "react-router-dom"
import silamaze from "../json/silamaze.json"
import { DropdownButton, Dropdown } from 'react-bootstrap';

function Sachuqrebi() {
  return (
    <section className="wholeconteiner">
      <div className="dropmanubt">
      <DropdownButton id="dropdown-basic-button" title="Dropdown Menu">
      <Dropdown.Item href="#">Option 1</Dropdown.Item>
      <Dropdown.Item href="#">Option 2</Dropdown.Item>
      <Dropdown.Item href="#">Option 3</Dropdown.Item>
    </DropdownButton>
      
      
      </div>
      <div className="movlaconteiner" >
        {silamaze.map((item) => {
          return( 
            
             <Link key={item.id}
              className="singlprd">
             <img className="slmpnj"
             src={item.img} alt="poto" />
             <div className="info">
              <div className="prices">
              <span>{item.newprice}</span>
              <span>{item.aldprice}</span>
              </div>
              <span>
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
