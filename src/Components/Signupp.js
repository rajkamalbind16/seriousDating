import React from 'react';
import './Signupp.css';
import {FacebookLoginButton,InstagramLoginButton} from "react-social-login-buttons";

const Signupp = ({isShowLoginn}) => 

{
  function handleClick() {
    alert("Welcome!");
  }
  return (
    <div className={`${!isShowLoginn ? "active": ""} show`}>
        <div className='login-form'>
            <div className='form-box solid' id='formID'>
                <form>
                    <h1 className='login-text'> Login </h1>
            <input type='text' name='username'placeholder='Username' className='login-box'></input><br/><br/>
    
    <input type='password' name='password'  placeholder='Password' className='login-box'></input><br/><br/>
    <button className='mybtn1'>Login</button><br/>
    <br/>
    <button className='mybtn2'>Signup</button>

    <FacebookLoginButton onClick={handleClick} />
    <InstagramLoginButton onClick={handleClick} />
    
       
    
               
                </form>
            </div>
        </div>
    
    </div>
  )
}

export default Signupp