import React from 'react';
import spoto from "../img/secton2pt.jpg"
import Rcheuli  from './Rcheuli';

import { Link } from 'react-router-dom';
import Saxli from './Saxli';

function Seconsection() {
  return (
    <>
      <Link 
       className='section01'>
     
        <div className='imgconteiner'>
          <img className='spoto'
           src={spoto} alt="" />
        </div>
        <Rcheuli />
        <Saxli />
        
      </Link>
    </>
  )
}

export default Seconsection
