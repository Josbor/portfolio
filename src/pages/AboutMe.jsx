import React from 'react'
import image from '../assets/profilePic.jpg'
const AboutMe = () => {
  return (
    <div className='about-container'>

      <div className='about-image-container'>
        <div className='about-image'>
         
          <img src={image}  />
        
        </div>
      </div>
      <div className='about-content'>
        <h2>SOBRE MI</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, saepe necessitatibus inventore vel maiores illo sequi suscipit? Quas esse voluptate itaque sunt, impedit accusantium nihil earum soluta blanditiis quaerat voluptatibus?</p>

      </div>
    </div>
  )
}

export default AboutMe