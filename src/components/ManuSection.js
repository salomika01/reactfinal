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


function ManuSection() {

  const [allct, setAllct] = useState(false)

  return (
    
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
      {manu.map( item => (
        <SwiperSlide 
         key={item.id}>
         <a href={item.link}
         className='manubox'>
          <h4 className='manutitle'>{item.title}</h4>
          <div className='imgcont'>
            <img className='manuimg'
             src={item.img} alt="" />
          </div>
         </a>
        </SwiperSlide>
      ))}

    </Swiper>

    </div>
  );
};




export default ManuSection
