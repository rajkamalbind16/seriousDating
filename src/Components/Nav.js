import React, { useState } from 'react'

import './Nav.css';
import { styled, alpha } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import About from './About';
import Login from './Login';
import pic1 from '../images/pic1.jpg';
import { BrowserRouter, Route, Link } from "react-router-dom";
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  


const Nav = ({handleLoginClick,handleLoginClick1}) => {

 
    const handleClick = () =>{
        handleLoginClick()
    }
 
    
    const handleClick1 = () =>{
      handleLoginClick1()
  }
    return (
    <>
    <div className='hero'>
        
      <div className='Logo'>Serious Dating</div>  
       <div className='Sub_Logo'>
       <Link to='/'>Home</Link>
       <Link to='/about'>About</Link>
       <Link to='/love'>Find Love</Link>
       <Link to='/contact'>Contact US</Link>
       
      
            
            
            
        
       </div>
  
          <div className='user'>
          <Stack spacing={2} direction="row">
      
      <span variant="contained" onClick={handleClick} className='loginicon'>LOGIN</span>
      <div className='user_icon' > <PersonIcon />
         </div>
      
      <Button variant="contained" onClick={handleClick1} className='loginicon1'>New User</Button>
      </Stack>
      </div>
       <div>
        <Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Find a Match"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        
          </Box>
       <h1 className='heading'>Find  Love <br></br>Like In <br></br> The Movies</h1>
    </div>
   
     </div>
  
     </>
  )
}

export default Nav