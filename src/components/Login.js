import { useState } from "react";


function Login({closelogin}) {
const [inputValue01, setInputValue01] = useState('')
const [inputValue02, setInputValue02] = useState('')
  

  
  const handleSubmit = (e) => {
    e.preventDefault();

    setInputValue01('')
    setInputValue02('')

    
    
  
  };


  
  return (
     <div>
      <div className="loginbg"></div>
       <div className='loginconteiner'>
        <div className='closebtn'>
        <button onClick={() => {
          closelogin(false)
        }}
         className='closereg'>&times;</button>
        </div>
        
        <div className='avtorizacia'>
            <h2>გაიარე ავტორიზაცია</h2>
            <span className='options'>
                <button className='autbtn'>ავტორიზაცია</button>
                <button className='regbtn'>რეგისტრაცია</button>
            </span>
        </div>
      <form 
      onSubmit={handleSubmit}
       className='formbox'
       action="">
        <div className='forminput01'>
        
        
        <input 
        className='inputm'
        type="text" 
        placeholder="მეილი"
        value={inputValue01 }
        onChange={(e) =>setInputValue01(e.target.value) }
        
        
       
        />
        </div>
        <div className='forminput02'>
            <input
             className='inputp'
             type="text" 
             placeholder="პაროლი"
             value={inputValue02}
             onChange={(e) =>setInputValue02(e.target.value) }
 
             />
        </div>
    
     
    
    
    
    
 
        
        
        <button className='newpsw'>დაგავიწყდა პაროლი?</button>
        <button 
        className='loginbtn'>შესვლა</button>
      </form>
      <div className='oroptio'>
        <span>ან</span>
      </div>
      <div className='loginsocial'>
        
         <button className='fcbk'> Facebook-ით შესვლა</button>
         
        <button className='ggl'>Google-ით შესვლა</button>
      </div>
    </div>
    </div>
    

    
    
   
  )
}

export default Login
