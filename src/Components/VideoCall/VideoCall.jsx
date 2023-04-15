import React from 'react';
import './VideoCall.css';

import boy from './photo/boy.jpg';
import girl from './photo/girl.jpg';
import girl2 from './photo/girl2.jpg';
import girl3 from './photo/girl3.jpg';
import girl4 from './photo/girl4.jpg';
import girl5 from './photo/girl5.jpg';

import {FiMic,FiVideo,FiPhone} from 'react-icons/fi';



const VideoCall = () => {
  return (
    <>
    <div className='mainContainer'>

        <div className='imgDiv'>
          <img src={boy} className='img'  id='boyy' />
          <img src={girl} className='img' id='girl' />
          <img src={girl2} className='img' id='girl2' /><br/>
          <img src={girl3} className='img' id='girl3' />
          <img src={girl4} className='img' id='girl4' />
          <img src={girl5} className='img' id='girl5' />

          <div className='icons'>
          <FiVideo id='videoIcon'/>
          <FiPhone id='phnIcon' />
            <FiMic id='micIcon' />
            
          </div>
        </div>
        <div className='asideContainer'>
              <div className='asideDiv'>
                  <p>Participants</p>
                  <p>Chat</p>
              </div>
              <div className='OnlineFriends'>
                      <li><img src={boy} id='boy1'/>&nbsp; &nbsp;Adriana,31</li>
                      <li><img src={girl} id='girls'/>&nbsp; &nbsp;Kent,28</li>
                      <li><img src={girl2} id='girls2'/>&nbsp; &nbsp;Pau,34</li>
                      <li><img src={girl3} id='girls3'/>&nbsp; &nbsp;Esmeralda,25</li>
                      <li><img src={girl4} id='girls4'/>&nbsp; &nbsp;Alana,23</li>
                      <li><img src={girl5} id='girls5'/>&nbsp; &nbsp;Andy,26</li>
              </div>
        </div>
        
    </div>
    
    
    
    </>
  )
}

export default VideoCall