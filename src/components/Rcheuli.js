import rcheulebi from "../json/rcheuli.json"

function Rcheuli() {
  return (
    <div >
      <h2>მომხმარებლის ფავორიტი პროდუქცია</h2>
      <div className="favconteiner">
      {rcheulebi.map((item) => {
    return (
      <div key={item.id}
       className="singlefav">
        <img className="favpoto"
        src={item.img} alt="" />
        <h4>
          {item.title}
        </h4>
      </div>
    )
  
  
  
    
  })}
      </div>
      
    
    </div>
  )
}

export default Rcheuli
