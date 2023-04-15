import React from 'react'
import './TopNav.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
var Nav = styled(AppBar)`
    background-color: #DE3163;
    height: 50px;
`;

var Text = styled(Typography)`
    color: white;
`;
const TopNav = () => {
  return (
    <div>

<Box sx={{ flexGrow: 1 }}>
      <Nav position="static">
        <Toolbar>
          < Text variant="h6" component="div" sx={{ flexGrow: 1 }}>
            +91 7878-9876-99
          </Text>
          <FacebookIcon/>
          <InstagramIcon/>
          <TelegramIcon/>
        </Toolbar>
 
      </Nav>
      </Box>

    </div>
  )
}

export default TopNav