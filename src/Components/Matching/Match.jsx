import React from 'react';
import './Match.css';

import boy from './photo/boy.jpg';
import girl from './photo/girl.jpg';
import heart from './photo/heart.png';

import {BsPersonAdd} from 'react-icons/bs';
import {BsWechat,BsCameraVideo,BsGift,BsEye} from 'react-icons/bs';
import {GoMail} from 'react-icons/go';

const Match = () => {
  return (
    <>
    <div>
        <div className='rWeComp'>
            <p id='compatible'>Are We Compatible?</p>
            <button id='matchBtn'>Back</button>
        </div>
    
    
     <div className='titleMatchs'>
        <p>IT'S SERIOUSLY MATCH!</p>
      </div>

      <div className='DivMatchingContainer'>
      <div className='divMatching'>
        <div>
            <img src={boy} alt="" id='boy'/>
        </div>
        <div>
            <img src={heart} alt="" id='heart'/>
        </div>
        <div>
            <img src={girl} alt="" id='girl'/>
        </div>
      </div>

      <div className='divContainerPro'>
        <p>Kent ,25 </p>
        <p>Cordoba, Argentina</p>

          <div className='iconLINKDiv'>
            <li className='iconLINK'> <BsPersonAdd/> </li>
            <li className='iconLINK'><BsWechat/> </li>
            <li className='iconLINK'><GoMail/></li>
            <li className='iconLINK'><BsCameraVideo/></li>
            <li className='iconLINK'><BsGift/></li>
            <li className='iconLINK'><BsEye/></li>
          </div>
                 <button id='SkipBtn'>Skip</button>

             <br/><p style={{fontSize:20}}>Hide Compatibility Details</p>
    </div>
      </div>

      </div>
  
    
    </>
  )
}

export default Match