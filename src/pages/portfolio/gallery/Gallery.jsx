import React, { useState } from 'react'
import './Gallery.scss'

  

  



  
  
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
                 
                  <img src={slides[currentIndex].image} alt="" >
                    
                  </img>
                  <div className='glow'></div>

              </div>

              <div className='right-arrow' onClick={goToNext}  >
                  ❱
              </div>
          </div>
          {/* <div className='container-footer' >
              {slides.map((slide, slideIndex) => (
                  <div
                      id={slide.id}
                      className={`container-img`}
                      key={slideIndex}
                      onClick={() => goToSlide(slideIndex)}
                  >
                      <img className={`${slideIndex==currentIndex?'selected':''}`} src={slide.image} alt="" />
                  </div>
              ))}
          </div> */}

      </div>
  )
}

export default Gallery