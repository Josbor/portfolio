import React, { useState } from 'react'
import './Gallery.scss'

  

  
  const rightArrowStyles = {
  
    //transform: "translate(0, -50%)",
    //right: "32px",
    fontSize: "45px",
    color: "#fff",
  
    cursor: "pointer",
  };
  
  const leftArrowStyles = {
  
    fontSize: "45px",
    color: "#fff",
  
    cursor: "pointer"
  };
  


  
  
const Gallery = ({ slides=[
    'https://picsum.photos/300/300/?random&8',
    'https://picsum.photos/300/300/?random&6',
    'https://picsum.photos/300/300/?random&6'
  ] }) => {
   
    const [currentIndex, setCurrentIndex] = useState(0);
    const     goToPrevious = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
    const goToNext = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };
  
  
 
  return (
      <div className="container-gallery"  >
          <div className='container-slide'>
              <div className='left-arrow' onClick={goToPrevious} >
                  ❰
              </div>
              <div className='container-image'>
                  <div className='img-label'>
                      <div className='label-content'>
                          <h3>{slides[currentIndex].name}</h3>
                          <p>{slides[currentIndex].description}</p>
                      </div>
                      <div className='label-buttons'>
                            <button>REPOSITORY</button>
                            <button>DEPLOY</button>
                      </div>
                  </div>  
                  <img src={slides[currentIndex].image} alt="" >
                    
                  </img>
                  <div className='glow'></div>

              </div>

              <div className='right-arrow' onClick={goToNext}  >
                  ❱
              </div>
          </div>
          <div className='container-footer' >
              {slides.map((slide, slideIndex) => (
                  <div
                      className='container-img'
                      key={slideIndex}
                      onClick={() => goToSlide(slideIndex)}
                  >
                      <img src={slide.image} alt="" />
                  </div>
              ))}
          </div>

      </div>
  )
}

export default Gallery