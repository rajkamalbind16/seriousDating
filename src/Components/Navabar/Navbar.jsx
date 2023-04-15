import React from 'react';
import './Navbar.css';

import logo from './photo/logo.jpeg';
import propic from './photo/propic.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className='navbarConatiner'>
        <div>
            <Link to='/'><img src={logo} alt="" id='logo' /></Link>
        </div>
        <div className='linkItems'>
        <Link style={{textDecoration:'none',color:'red'}} to='/dashboard'> <li className='link'>Dashboard</li> </Link>

            <li className='link'><Link style={{textDecoration:'none',color:'red'}} to='/new-matching'>New Matches</Link></li>

            <li className='link'> <Link style={{textDecoration:'none',color:'red'}} to='/game'> Dating Games </Link></li>

            <li className='link'><Link style={{textDecoration:'none',color:'red'}} to='/event'>Events</Link></li>

            <li className='link'><Link to='/newmatch' style={{textDecoration:'none',color:'red'}}>Browse</Link></li>

            <li className='link'><Link to='/Compatibilty'style={{textDecoration:'none',color:'red'}}>Compatibility</Link></li>

            <li className='link'><Link to='/invite'style={{textDecoration:'none',color:'red'}}>Invite Friends</Link></li>


            <li className='link'><Link to='/onlinechat'style={{textDecoration:'none',color:'red'}}>Online Chat</Link></li>


            <li className='link'><Link to='/videocall'style={{textDecoration:'none',color:'red'}}>Video Chat</Link></li>
            <li className='link'> <Link to='/travellPlanner'style={{textDecoration:'none',color:'red'}}>  Travel Planner</Link></li>

            <li className='link'> <Link to='/login'style={{textDecoration:'none',color:'red'}}>Login</Link> </li>
            
            <li className='link'></li>
        </div>
        <div><img src={propic} alt="" id='profilepic'/></div>
    </div>
    
    
    
    
    </>
  )
}

export default Navbar