import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dragonBallData from '../dragonBallData.json';
import './DragonBallCarousel.css'

function DragonBallCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <Slider {...settings}>
        {dragonBallData.map(character => (
          <center>
            <div key={character.id}>
              <h3>{character.name}</h3>
              <p>Power: {character.power}</p>
              <img src={character.imageUrl} alt={character.name} style={{ width: '50%', maxWidth: '100px' }} className='character'/>
            </div>
          </center>
        ))}
      </Slider>
    </div>
  );
}

export default DragonBallCarousel;
