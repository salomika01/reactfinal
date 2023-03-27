import rcheulebi from "../json/rcheuli.json"

function Rcheuli() {
  return (
    <div className="cont" >
      <h2>ფირფიტების განახლებული კოლექცია</h2>
      <div className="favconteiner">
      {rcheulebi.map((item) => {
      return (
      <div key={item.id}
       className="singlefav">
        <img className="favpoto"
        src={item.img} alt="" />
        <div className="pricescont">
          <span className="newprs">{item.newprise}</span>
          <span className="oldprs">{item.oldprise}</span>
        </div>
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
