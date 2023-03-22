import manu from "../json/manu.json"

export default function Allcategory({closeallctg}) {
  return (
    <div className="allbox">
      <div className="allctitle" >
         <span className="allctg"> ყველა კატეგორია</span>
       <button onClick={() =>{
        closeallctg(false)
       }}
        className="allclosebtn">&times; </button>
      </div>
      
      
      <div className="gridconteiner">
      {manu.map((item) => {
       return(
     
     <button  className="insidegrid">
     <span className="itemttl">
       {item.title}
     </span>
     <img className="singleimg"
      src={item.img} alt="" />
     </button>
     
        )
     })}
        
      </div>

      
    </div>
  )
}
