import React, { useState, useMemo, useRef } from 'react'
import TopNav from './TopNav'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';

import IconButton from '@mui/material/IconButton';
import TinderCard from 'react-tinder-card';
import { styled } from '@mui/material/styles';
import {
  FacebookIcon,
  FacebookShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  TelegramShareButton,
  TelegramIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { lightGreen, purple, red, yellow } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import pic1 from '../images/pic2.jpg';
import pic2 from '../images/pic1.jpg';
import pic3 from '../images/pic3.jpg';




import './Love.css';
import { CopyAll, Facebook, Instagram, Telegram, WhatsApp } from '@mui/icons-material';
import { Link } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const db = [
  {
    name: 'Richard Hendricks',
    url: 'https://cdn.britannica.com/61/217461-050-93A0E3CB/Israeli-Gal-Gadot-2019.jpg'
  },
  {
    name: 'Erlich Bachman',
    url: 'https://cdn.britannica.com/27/179127-050-42DDD3B5/Jennifer-Lawrence-Katniss-Everdeen-The-Hunger-Games.jpg'
  },
  {
    name: 'Monica Hall',
    url: 'https://cdn.britannica.com/16/185916-050-5642DEC5/Julianne-Moore-Still-Alice-Wash-Westmoreland-Richard.jpg'
  },
  {
    name: 'Jared Dunn',
    url: 'https://cdn.britannica.com/34/220234-050-000D4B0E/Cate-Blanchett-2018.jpg'
  },
  {
    name: 'Dinesh Chugtai',
    url: 'https://cdn.britannica.com/32/213832-050-4B5EECF3/movie-still-Nicole-Kidman-The-Hours-2002.jpg'
  }
]




const Love = () => {
   
 {/* const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

*/}

const[like, setLike] = useState(0);

const handleClickk = () =>{
  setLike(like+1);
};
const [expanded, setExpanded] = React.useState(false);

const handleExpandClick = () => {
  setExpanded(!expanded);
};
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


  const shareUrl ="https://www.npmjs.com/package/react-share";
  return (
    <>
    <div className='main'><TopNav/>
    <div className='find'>
      <IconButton>
      <PersonIcon className='header_icon' fontSize='large'/>
    
      </IconButton>
      <h1>Serious Dating</h1>
      <Link to="/chat">
   <IconButton>
   <ForumIcon className='header_icon' fontSize='large'/>
  
   </IconButton>
   </Link>
    </div>
    <div>
      
    <link
        href='https://fonts.googleapis.com/css?family=Damion&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
        rel='stylesheet'
      />
      <div className='cardContainer'>
        {db.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name, index)}
            onCardLeftScreen={() => outOfFrame(character.name, index)}
          >
            <div
              style={{ backgroundImage: 'url(' + character.url + ')' }}
              className='card'
            >
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className='buttons'>
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>Swipe left!</button>
        <button style={{ backgroundColor: !canGoBack && '#c3c4d3'  }} onClick={() => goBack()}>Undo swipe!</button>
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>Swipe right!</button>
      </div>
      {lastDirection ? (
        <h2 style={{marginLeft: 550}}   key={lastDirection} className='infoText'>
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className='infoText'>
          Swipe a card or press a button
        </h2>
      )}

      </div>


{/*    <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      <h1>React Tinder Card</h1>
      <div className='cardContainer'>
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        )}
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    
        */}
        
    </div>
    
    <div className='gallary'>
      <h1>Some Beautiful Stories</h1>
      </div>
        <div className='gallary1'>     
          <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            AS
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Abhishek And Shweta"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={pic1}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Met Through Serious Dating, Abhishek AND Shweta met online on the famous platform Serious Dating,
         they dated for almost 4 years and end up tying a knot in 2016.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <h1>{like}</h1>  <FavoriteIcon onClick={handleClickk} />
        </IconButton>
        <IconButton aria-label="share">
            <div class="social-media">
            <FacebookShareButton url={
            shareUrl
            }>
              <FacebookIcon size={40}/>
            </FacebookShareButton>
              <WhatsappShareButton url={shareUrl}>
                <WhatsappIcon size={40}/>
              </WhatsappShareButton>
              <InstapaperShareButton url={shareUrl}>
<InstapaperIcon size={40}/>
              </InstapaperShareButton>
               <TelegramShareButton  url={shareUrl}>
              <TelegramIcon size={40}/>
               </TelegramShareButton>
               <LinkedinShareButton url={shareUrl}>
               <LinkedinIcon size={40} />
               </LinkedinShareButton>
            </div>
      
          
          
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: lightGreen[500] }} aria-label="recipe">
            RP
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Ritu And Pratap"
        subheader="August 14, 2019"
      />
      <CardMedia
        component="img"
        height="194"
        image={pic2}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <h1>{like}</h1>  <FavoriteIcon onClick={handleClickk} />
        </IconButton>
        <IconButton aria-label="share">
            <div class="social-media">
            <FacebookShareButton url={
            shareUrl
            }>
              <FacebookIcon size={40}/>
            </FacebookShareButton>
              <WhatsappShareButton url={shareUrl}>
                <WhatsappIcon size={40}/>
              </WhatsappShareButton>
              <InstapaperShareButton url={shareUrl}>
<InstapaperIcon size={40}/>
              </InstapaperShareButton>
               <TelegramShareButton  url={shareUrl}>
              <TelegramIcon size={40}/>
               </TelegramShareButton>
               <LinkedinShareButton url={shareUrl}>
               <LinkedinIcon size={40} />
               </LinkedinShareButton>
            </div>
      
          
          
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: purple[500] }} aria-label="recipe">
            MK
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Mayank And Kritika"
        subheader="December 4, 2022"
      />
      <CardMedia
        component="img"
        height="194"
        image={pic3}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <h1>{like}</h1>  <FavoriteIcon onClick={handleClickk} />
        </IconButton>
        <IconButton aria-label="share">
            <div class="social-media">
            <FacebookShareButton url={
            shareUrl
            }>
              <FacebookIcon size={40}/>
            </FacebookShareButton>
              <WhatsappShareButton url={shareUrl}>
                <WhatsappIcon size={40}/>
              </WhatsappShareButton>
              <InstapaperShareButton url={shareUrl}>
<InstapaperIcon size={40}/>
              </InstapaperShareButton>
               <TelegramShareButton  url={shareUrl}>
              <TelegramIcon size={40}/>
               </TelegramShareButton>
               <LinkedinShareButton url={shareUrl}>
               <LinkedinIcon size={40} />
               </LinkedinShareButton>
            </div>
      
          
          
        </IconButton>
       
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

        </div>
</>
  )
}

export default Love