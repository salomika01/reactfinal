

function Login({closelogin}) {

  

  
  const handleSubmit = (e) => {
    e.preventDefault();
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
        <label className='lblmail'
         htmlFor="">მეილი</label>
        <input 
        className='inputm'
        type="text" 
      
        
        
       
        />
        </div>
        <div className='forminput02'>
            <label 
            className='lblpsw'
             htmlFor="">პაროლი</label>
            <input
             className='inputp'
             type="text" 
             
             
             
           
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
