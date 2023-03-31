import React from 'react'
import { Link } from 'react-router-dom'
import sim01 from "../img/similar1.jpg"
import sim02 from "../img/similar2.jpeg"
import sim03 from "../img/similar3.jpg"

function Similarpr() {
  return (
    <section>
      <div className='similarbox'>
        <h2> მსგავსი პროდუქტები</h2>
        <div className='simproduct'>
          <Link className='sim01'>
          <img src={sim01} alt="" />
          <div> <span className='newprice'>52.50 ₾</span>
                <span className='oldprice'>75.00 ₾</span>
                </div>
      
      
          <p>SkinChemists დღის კრემი <br /> Collagen</p>
          </Link>
          <Link className='simo2'>
              <img src={sim02} alt="" />
              <div><span className='newprice'>52.50 ₾</span>
                 <span className='oldprice'>75.00 ₾</span>
                 </div>
              
              
               <p>Dr.Botanicals Kale დღის <br /> კრემი</p>
           </Link>
           <Link className='sim03'>
            <img src={sim03} alt="" />
            <div> <span className='newprice'>52.50 ₾</span>
              <span className='oldprice'>75.00 ₾</span>
              </div>
           
           
             <p>Nuxe plumping Rich <br /> Moisturising სახის კრემი</p>
            </Link>
            
            
            
        </div>
        <h3>Lierac Anti-Age სახის ფლუიდი</h3>
        <div className='textwrapper'>
        <p>ასაკსაწინააღმდეგო, მრავალფუნქციური სახის ფლუიდი, 3-1 ში.
             ებრძვის ნაოჭებს, ამკვრივებს, ატენიანებს, ამცირებს ლაქებს,
              აუმჯობესებს კანის ტექსტურას.</p>
       <p>წასმის მომენტიდან კანი ხდება გლუვი, კვირების განმავლობაში აღადგენს სტრუქტურას,
         სიმტკიცეს და ტონუსს. გამოიყენება თვალის კონტურის ზონისთვისაც.
          დამზადებულია 91% წარმოშობის ბუნებრივი ინგრედიენტებით, ტესტირებულია 
          დერმატოლოგიურად.</p>
        </div>
        <h3>გამოყენების წესი</h3>
        <p>რეკომენდირებულია კაცის სახისა და თვალებისთვის.</p>

        <p> დაიტანეთ დილით და საღამოს გაწმენდილ სახის კანზე.</p>
        
      </div>

    </section>
  )
}

export default Similarpr
