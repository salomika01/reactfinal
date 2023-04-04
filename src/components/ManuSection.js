import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import manu from "../json/manu.json"

import {FaListUl} from "react-icons/fa"

import { useState } from 'react';
import Allcategory from './Allcategory';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Login from "./Login";
import {  FaSearch } from "react-icons/fa";
import {FaShoppingCart} from "react-icons/fa"
import pngLogo from "../img/velilogo.png"
import {FaUser} from "react-icons/fa"
import {FaRedo} from "react-icons/fa"
import Cartitem from './Cartitem';




function ManuSection() {
  const [login, setLogin] = useState(false)
  const [allct, setAllct] = useState(false)
  const [kalata, setKalata] =useState(false)
  
  const { t } = useTranslation();

  const [search, setSearch] = useState("")
  console.log(search)
  

  return (
    <div>
       <div className="header">
  <div className="mainlogo">
  <NavLink to='./' >
  <img className="velilogo" src={pngLogo} alt="velisore-logo" />
  </NavLink>
 
  </div>
   <div className="serchbar">
  <FaSearch className="searchicon" />
     <input 
      onChange={(e) => setSearch(e.target.value)} 
      className="serch"
     type="text" 
     placeholder="რას ეძებ?"
     />
     <FaRedo className="redo" />
   </div>
   <div className="persinpo">
    <Link to="/cart">
    <button 
    className="bskbtn"
    onClick={() => { setKalata(true) }}
    >
     <FaShoppingCart  className="basketicon" />
     {/* <span className='quantity'>0</span> */}
     <span className="basket">კალათა</span>
  

    </button>
    {kalata &&  <Cartitem closekalata={setKalata} />}
    </Link>
    <button 
     className="login"
    onClick={() => { setLogin(true) }}
    >
     <FaUser className="usicon"/>
     <span className="lgn"> შესვლა </span>
     </button>
      {login &&  <Login closelogin={setLogin} />}
      
   </div>
  
  
  
 </div>
      

<div className='slide'>
 
 
<div className='allcategorybox'>
  <button onClick={() => {
    setAllct(true)
  }}
  className='manubtn'>
    <FaListUl className='listicon' />
    <span className='allcategory' >
      <h4> ყველა კატეგორია</h4>
    </span>
  </button>
  {allct && <Allcategory closeallctg={setAllct} />}
  </div>
    <Swiper 
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={7}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {manu.filter(item =>item.title.toLocaleLowerCase().includes(search)).map( item => (
        <SwiperSlide 
         key={item.id}
        >
          
          <NavLink className="manubox"
          to={`/${item.link}`}
          
        >   
                  
          <h4 className='manutitle'>{t(item.title)}</h4>
          <div className='imgcont'>
            <img className='manuimg'
             src={item.img} alt="" />  
          </div>
        </NavLink> 
        </SwiperSlide>
      ))}

    </Swiper>

    </div>
    </div>
  );
};




export default ManuSection
