import React from 'react';
import './Womens.css';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";



import pic1 from './photo/pic1.jfif';
import pic2 from './photo/pic2.jfif';
import pic3 from './photo/pic3.jfif';
import pic4 from './photo/pic4.jfif';
import pic5 from './photo/pic5.jfif';
import pic6 from './photo/pic6.jfif';
import pic7 from './photo/pic7.jfif';
import pic8 from './photo/pic8.jfif';
import pic9 from './photo/pic9.jfif';
import pic10 from './photo/pic10.jfif';



const Womens = () => {

    const LastScrollCard = [
        {
            id: 1,
            name: "Maya Parsad",
            Age: "22 Years",
            Gender:"Female",
            Adress: "Kolkatta",
            Hobby:"Singing ,Dacncing",
            image: [pic1 ,pic1 ,pic1],
            country: "India"
        },

        {
            id: 2,
            name: "Susma Kumari",
            Age: "22 Years",
            Gender:"Female",
            Adress: "Kolkatta",
            Hobby:"Singing ,Dacncing",
            image: [pic2,pic2,pic2],
            country: "India"

        },

        {
            id: 3,
            name: "Payal Parsad",
            Age: "22 Years",
            Gender:"Female",
            Adress: "Kolkatta",
            Hobby:"Singing ,Dacncing",
            image: [pic3,pic3,pic3],
            country: "India"
        },

        {
            id: 4,
            name: "Priya Parsad",
            Age: "22 Years",
            Gender:"Female",
            Adress: "Kolkatta",
            Hobby:"Singing ,Dacncing",
            image: [pic4,pic4,pic4],

            country: "India"
        },

        {
            id: 5,
            name: "Priyanka Kumari",
            Age: "22 Years",
            Gender:"Female",
            Adress: "Kolkatta",
            Hobby:"Singing ,Dacncing",
            image: [pic5,pic5,pic5],
            country: "India"
        },

        {
            id: 6,
            name: "Rani Parsad",
            Age: "22 Years",
            Gender:"Female",
            Adress: "Kolkatta",
            Hobby:"Singing ,Dacncing",
            image: [pic6,pic6,pic6],

            country: "India"
        },

        {
            id: 7,
            name: "Puja Kumari",
            Age: "22 Years",
            Gender:"Female",
            Adress: "Kolkatta",
            Hobby:"Singing ,Dacncing",
            image: [pic7,pic7,pic7],

            country: "India"
        },

        {
            id: 8,
            name: "Neha Parsad",
            Age: "22 Years",
            Gender:"Female",
            Adress: "Kolkatta",
            Hobby:"Singing ,Dacncing",
            image: [pic8,pic8,pic8],
            country: "India"
        },

        {
            id: 9,
            name: "Dipa Parsad",
            Age: "22 Years",
            Gender:"Female",
            Adress: "Kolkatta",
            Hobby:"Singing ,Dacncing",
            image: [pic9,pic9,pic9],
            country: "India"
        },

        {
            id: 10,
            name: "Nazia Khan",
            Age: "22 Years",
            Gender:"Female",
            Adress: "Kolkatta",
            Hobby:"Singing ,Dacncing",
            image: [pic10,pic10,pic10],
            country: "India"
        },

    ]




    const ScrollCarouselCard = ({ name, age, Gender,Adress,Hobby, country, image }) => {
        return (
            <div className='CarouselConatiner'>
                <div className='cardss'>

                    <span>
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                            {image.map((image, index) => (
                                <SwiperSlide>
                                    <img key={index} src={image} alt={`Image ${index + 1}`} className="imgScrollCarousel" />
                                </SwiperSlide>

                            ))}
                        </Swiper>
                    </span>
                    <span className='carouselText'>{name}</span><br />
                    <span className='carouselText'>{age}</span><br />
                    <span className='carouselText'>{Gender}</span><br />
                    <span className='carouselText'>{Adress}</span><br />
                    <span className='carouselText'>{Hobby}</span><br />
                    <span className='carouselText'>{country}</span><br />


                </div>
            </div>
        )
    }

  return (
    <>
    
    <div>
                <div className='Heading'>
                    <span>Womens are Nearby</span>
                </div>
                <div className='Girlscard'>
                    {LastScrollCard.map(cardx => (
                       
                        <ScrollCarouselCard key={cardx.name} {...cardx} />
                    ))};

                </div>




              
    </div>
    
    </>
  )
}

export default Womens