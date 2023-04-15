import './App.css';
import About from './Components/About';
import Match from './Components/Matching/Match';
import Navbar from './Components/Navabar/Navbar';
import FinderSearch from './Components/RandomSearch/FinderSearch';
import VideoCall from './Components/VideoCall/VideoCall';
import Profile from './Components/profile/Profile';
import Chat from './Components/Chat';
import Chats from './Components/Chats';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Contact from './Components/Contact';
import Love from './Components/Love';
import Signupp from './Components/Signupp';
import Event from './Components/event/Event';
import Signup from './Components/Signup/Signup';
import Game from './Components/Game';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    {/* <About/> */}
    {/* <Chat/> */}
    {/* <Chats/> */}
    {/* <Contact/> */}
    {/* <Love/> */}
    {/* <Signup/> */}
    {/* <Home/> */}
    {/* <Signupp/> */}
    


    <Routes>
    {/* <Route path='/' element={} /> */}
    <Route path='/Compatibilty' element={<Profile/>} />
    <Route path='/newmatch' element={<FinderSearch/>}/>
    <Route path='/new-matching' element={<Match/>}/>
    <Route path='/videocall' element={<VideoCall/>}/>
    <Route path='/game' element={<Game/>}/>
    <Route path='/' element={<Signup/>}/>   
    <Route path='/onlinechat' element={<Chats/>}/>
    <Route path='/event' element={<Event/>}/>
    <Route path='/travellPlanner' element={<About/>}/>
    <Route path='/invite' element={<Contact/>}/>
    <Route path='/dashboard' element={<Love/>}/>
    <Route path='/login' element={<Signupp/>}/>




    </Routes>
    
    </BrowserRouter>
  

 

  
    
    
    
    </>
  );
}

export default App;
