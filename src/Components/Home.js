import React, { useState } from 'react'
import TopNav from './TopNav'
import Nav from './Nav'
import Login from './Login'
import '../App.css'
import Signup from './Signup'
const Home = () => {
    const [isShowLogin, setIsShowLogin] = useState(false)
    const [isShowLoginn, setIsShowLoginn] = useState(false)
    const handleLoginClick = () =>{
        setIsShowLogin((isShowLogin)=> !isShowLogin)
        
    }
    const handleLoginClick1 = () =>{
      setIsShowLoginn((isShowLoginn)=> !isShowLoginn)
  }
  return (
    <div>
        {/* <TopNav/> */}
        <Nav handleLoginClick={handleLoginClick} handleLoginClick1={handleLoginClick1}/>
        
  
    {/* <Login isShowLogin={isShowLogin}/>
    <Signup isShowLoginn={isShowLoginn}/>   */}
    
    </div>
  )
}

export default Home