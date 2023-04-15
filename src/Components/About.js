import React, { useState } from 'react'


import TopNav from './TopNav'
import './About.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import styled from '@emotion/styled';
import Signup from './Signupp';
import pic1 from '../images/pic2.jpg'
const Mybutton = styled(Button)`
    background-color:pink;
    color:black;
    border-radius:50px;
    margin-left:300px;
`
const About = () => {
    
    const [isShowLoginn, setIsShowLoginn] = useState(false)
    const handleLoginClick1 = () =>{
      setIsShowLoginn((isShowLoginn)=> !isShowLoginn)
  } 

    const handleClick1 = () =>{
        handleLoginClick1()
    };

    
  return (
    <div className='learn'>
        <TopNav/>
        <div className='learn_text'>
                       <h1>So, why choose a dating app like Serious Dating?</h1>
            </div>
            <div className='learn_main'>
                <h3><i>
                    When it comes to dating apps, you’ve got options: Tinder, Badoo, Bumble, Hinge, Match, POF,<br></br> OKCupid and many more. It doesn’t matter 
                if you want to find love, a date, or just have a casual chat,<br></br> you want an app that’s the right match 
                for you. And it’s not always black and white – when you want<br></br> to meet new people, your friends at Serious Dating
                 can help you out with features designed to make the <br></br> impossible possible. Dating online just got easier.</i></h3>
                 <h3><i>We won’t brag about being the best free site – we’ll let you decide for yourself, by giving <br></br> you Serious Dating at a glance.

</i></h3>

<Mybutton variant="contained" onClick={handleClick1} className='loginicon1'>Join now and Book Your travel Plan!</Mybutton>            </div>
{/* <Signup isShowLoginn={isShowLoginn}/>   */}
    <div className='learn_section'>
    <div className='learn_subsec'>
        <h1>Date safer with Face to Face</h1>
        <h4>We’re all eager to meet new people IRL, but dating during <br></br> COVID-19 means putting your safety first. When two metres <br></br> apart isn’t enough, Face to Face lets you video chat with your <br></br>match, so you can keep the connection going online.</h4>
    </div>
    <div className='learn_subsec'>
 <h1>   Explore your Passions</h1>


 <h4> It’s easy to chat up a match when you know you have <br></br> something in common. The Serious Dating app lets you add Passions <br></br> to your profile and connect with people who share your <br></br>interests.</h4>
    </div>
    
    </div>
    <div className='couple'>
        <img src={pic1}/>
        <img src={pic1}/>
    </div>
    </div>

  )
}

export default About