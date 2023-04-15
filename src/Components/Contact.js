import * as React from 'react';
import './Contact.css';
import Button from '@mui/material/Button';
import TopNav from './TopNav';
import { styled } from '@mui/material/styles';
import { pink, purple, red, teal } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

const ColorButton1 = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: pink[500],
  '&:hover': {
    backgroundColor: pink[700],
  },
}));

const ColorButton2 = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: red[500],
  '&:hover': {
    backgroundColor: red[700],
  },
}));

const ColorButton3 = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: teal[500],
  '&:hover': {
    backgroundColor: teal[700],
  },
}));


const Contact = () => {
  return (
    <>
    <TopNav/>
    <div className='contact'>
      <h1>
        Hello!! Why you alone here?<br/>Invite your Friends....
      </h1>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Search Your Query" variant="standard" />
    </Box>
    <div className='bottom'>
 <Link to='/guide'>   <ColorButton variant="contained">A Guide To Serious Dating</ColorButton></Link>
 
    <ColorButton1 variant="contained">Troubleshooting</ColorButton1>
    <ColorButton2 variant="contained">Security & Privacy</ColorButton2>
    <ColorButton3 variant="contained">Safety & Reporting</ColorButton3>
    
    </div>
    </div>
    </>
 )
}

export default Contact