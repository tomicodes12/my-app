import React, { useState } from 'react';
import image11 from '../images/image11.jpg';
import image8 from '../images/image8.jpg';
import image3 from '../images/image3.jpg';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    image11,
    image8,
    image3
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="slideshow-container">
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
      <div className="slideshow-slide">
        <img src={images[currentSlide]} alt={`Slide ${currentSlide}`} />
      </div>
    </div>
  );
};

export default Slideshow;
