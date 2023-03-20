import React from 'react';
import spoto from "../img/secton2pt.jpg"
import Rcheuli from './Rcheuli';
import { Link } from 'react-router-dom';
function Seconsection() {
  return (
    <>
      <Link 
       className='section01'>
      <Rcheuli />
        <div className='imgconteiner'>
          <img className='spoto'
           src={spoto} alt="" />
        </div>
        
        
      </Link>
    </>
  )
}

export default Seconsection
