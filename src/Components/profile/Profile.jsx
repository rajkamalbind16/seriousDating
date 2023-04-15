import React from 'react';
import './Profile.css';
import boy from './photo/boy.jpg';

import {BsPersonAdd} from 'react-icons/bs';
import {BsWechat,BsCameraVideo,BsGift,BsEye} from 'react-icons/bs';
import {GoMail} from 'react-icons/go';

const Profile = () => {
  return (
    <>
    <div className='mainContainerDiv'>

      <div className='Div1'>
        <p>Kent ,25 </p>
        <p>Cordoba, Argentina</p>

          <div className='iconsLINKDiv'>
            <li className='iconsLINK'> <BsPersonAdd/> </li>
            <li className='iconsLINK'><BsWechat/> </li>
            <li className='iconsLINK'><GoMail/></li>
            <li className='iconsLINK'><BsCameraVideo/></li>
            <li className='iconsLINK'><BsGift/></li>
            <li className='iconsLINK'><BsEye/></li>
          </div>
                 <button id='SkipBTn'>Skip</button>

             <p>Hide Compatibility Details</p>
    </div>


    <div className='Div2'>
      <p style={{color:'red',fontWeight:'bolder',fontSize:30}}>Compatibility Details</p>
      <p >We would like to introduce you to Kent</p>
    </div>

    <div className='Div3'>
          <div className='proflieDiv'>
                <img src={boy} alt="" id='imgProfile'/>
                <p>Kent ,25 </p>
              <p>Cordoba, Argentina</p>
          </div>

        <div className='profileItems'>
          <p className='bullet'>Seeking for : Female</p>
          <p className='bullet'>Have Kids :No</p>
          <p className='bullet'>Partner's Dependability: Very Good</p>
          <p className='bullet'>Sexual Compatibility :Important</p>
          <p className='bullet'>Medication:No</p>
          <p className='bullet'> Education:Bachelor's</p>
          <p className='bullet'> Relationship Type: Dating </p>
          <p className='bullet'> Occupation :Teacher </p>
          <p className='bullet'> Ethnicities:White/Black </p>
          <p className='bullet'> Age:21:80 </p>
          <p className='bullet'> Smoke :Never </p>
          <p className='bullet'> Body Type:Slim </p>
          <p className='bullet'> Friendship bBeween Partner:Very Imprtant </p>
          <p className='bullet'> Longest Relationship Have Been in :Longer </p>
          <p className='bullet'> Exercise :Regularly </p>
          <p className='bullet'> Height :5'6 </p>
          <p className='bullet'> Income :$1000,000-$3000,000</p>
          <p className='bullet'> Religion : Unitarian Universalion</p>
        </div>
    </div>


    </div>

    
    </>
  )
}

export default Profile