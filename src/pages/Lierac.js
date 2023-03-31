import React, { Component } from 'react';
import Lieracpn from "../img/lierac.png";
import ReactImageMagnify from 'react-image-magnify';
import Similarpr from './Similarpr';

export default class Lierac extends Component {
  render() {
    return (
      <section>
        <h1>Lierac Anti-Age სახის ფლუიდი</h1>
      <div className='singlebox'>
        <div className='lieracont'>
        <ReactImageMagnify {...{
        smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: Lieracpn
        },
        largeImage: {
        src:Lieracpn,
        width: 150,
        height: 1200
        }
        }} />
        </div>
        <div className='infocont'>
          <p> <span>Lierac Anti-Age სახის ფლუიდი</span>
            </p>
          <p>ასაკსაწინააღმდეგო მოქმედებით</p>
          <p>ამკვრივებს & ატენიანებს კანს</p>
          <p>აქრობს დაბერების ნიშნებს </p>
          <p>აღადგენს კანის სტრუქტურას & ტონუსს</p>
          <p>რეკომენდირებულია ყველა ტიპის კანისთვის</p>
          <p>ტესტირებულია დერმატოლოგიურად</p>
          <p>50 მლ</p>

        </div>
        <div className='prices_'>
          <div className='prscont'>
            <span className='prise'>64.50 ₾</span>
            <span className='freedeliv'>უფასო მიწოდება</span>
          <div className='btns'>
          <button className='bsktbtn01'>კალათაში დამატება</button>
          <button className='shopbtn01'> ყიდვა</button>
          </div>
              
              
           
          </div>
        </div>
      </div>
      <Similarpr />
      </section>
    )
  }
}
