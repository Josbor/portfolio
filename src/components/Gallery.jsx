import React, { useState } from 'react'

const slideStyles = {

    borderRadius: "10px",
  
  
  };
  
  const imgStyle = {
    height: 70
  }
  
  const rightArrowStyles = {
  
    //transform: "translate(0, -50%)",
    //right: "32px",
    fontSize: "45px",
    color: "#fff",
  
    cursor: "pointer",
  };
  
  const leftArrowStyles = {
  
    //transform: "translate(0, -50%)",
    //left: "32px",
    fontSize: "45px",
    color: "#fff",
  
    cursor: "pointer"
  };
  
  const sliderStyles = {
  
  
  };
  
  const dotsContainerStyles = {
  
  
  
    margin: "125px auto 0 auto",
  
    display: "flex",
    justifyContent: "center",
  
  
  };
  
  const dotStyle = {
   
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
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
    const slideImage = {
      ...slideStyles,
      maxWith: 700,
      maxHeight: 300,
  
  
    };
    const slideContent = {
      display: "grid",
      gridTemplateColumns: "20px 760px 20px",
      alignItems: "center",
      alignContent: "center",
      width: 800,
      height: 100
    }
  
    const contenedor = {
      position: "relative",
      top: "25%",
    }
  return (
    <div style={contenedor} >
    <div style={slideContent}>
      <div onClick={goToPrevious} style={leftArrowStyles}>
        ❰
      </div>
      <div style={{ display: "flex", justifyContent: "center" }} >
        <img src={slides[currentIndex].image} style={slideImage} alt="" />
      </div>

      <div onClick={goToNext} style={rightArrowStyles} >
        ❱
      </div>
    </div>
    <div style={dotsContainerStyles}>
      {slides.map((slide, slideIndex) => (
        <div
          style={dotStyle}
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
        >
          <img src={slide.image} alt="" style={imgStyle} />
        </div>
      ))}
    </div>

  </div>
  )
}

export default Gallery