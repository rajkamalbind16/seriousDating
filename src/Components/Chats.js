
import React, { useState, useMemo, useRef } from 'react'

import './Chats.css'
import Chat from './Chat'

const db = [
  {
    name: 'Richard Hendricks',
    url: 'https://cdn.britannica.com/04/171104-050-AEFE3141/Steve-Jobs-iPhone-2010.jpg'
  },
]



const Chats = () => {
 
  const [currentIndex, setCurrentIndex] = useState(db.length - 1)
  const [lastDirection, setLastDirection] = useState()
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < db.length - 1

  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

 return (
<div className='chat_main'>
    <div className='chats'>
      <Chat
       name="Mark,27"
       message="Hey! How are you doing?😊"
//       timestamp="35 minutes ago"
       profilePic="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTTJPhPkLZfVYSd_ituy7KqVdL6mgbvL--doBdXI2ss3_6tdAPUBjfyuP46fvdUggLWtPrSGo0N1_gGIlA"
      />
<Chat
       name="Ellena,24"
       message="I am waiting for you ❤"
  //     timestamp="40 sec ago"
       profilePic="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQGLDCxkTJvbEMbebnX_f5m2G-HusYwBz3Rhi8wu8M-HBYPyGzFDItKaz4LXefuk6RHz3pQwgSuE-aFPYY"
      />

<Chat
       name="Mickey,23"
       message="You look beautiful😍"
    //   timestamp="22 hours ago"
     //  profilePic="..."
      />
  
  <Chat
       name="sid,33"
       message="yo whats up😎??"
      // timestamp="40 sec ago"
       profilePic="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSSfJiYyhcEnH-h3cUhJkanglGePfiR2bukJxVIS0jNmqCLam_BZVDQ-TV8_7h8ZyyVFxt961pmod9_4gM"
       
      />

<Chat
       name="Mark,27"
       message="Hey! How are you doing?😊"
     //  timestamp="35 minutes ago"
       profilePic="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTTJPhPkLZfVYSd_ituy7KqVdL6mgbvL--doBdXI2ss3_6tdAPUBjfyuP46fvdUggLWtPrSGo0N1_gGIlA"
      />
<Chat
       name="Ellena,24"
       message="I am waiting for you ❤"
    //   timestamp="40 sec ago"
       profilePic="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQGLDCxkTJvbEMbebnX_f5m2G-HusYwBz3Rhi8wu8M-HBYPyGzFDItKaz4LXefuk6RHz3pQwgSuE-aFPYY"
      />

<Chat
       name="Mickey,23"
       message="You look beautiful😍"
    //   timestamp="22 hours ago"
     //  profilePic="..."
      />
  
  <Chat
       name="sid,33"
       message="yo whats up😎??"
    //   timestamp="40 sec ago"
       profilePic="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSSfJiYyhcEnH-h3cUhJkanglGePfiR2bukJxVIS0jNmqCLam_BZVDQ-TV8_7h8ZyyVFxt961pmod9_4gM"
       
      />
</div>
<div className='welcome'>
<h1>Welcome to Seriously Match</h1>
     
</div>
    </div>
  )
}

export default Chats