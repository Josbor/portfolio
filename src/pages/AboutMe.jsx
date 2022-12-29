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
        <p>Soy Jose Alberto Borrego ,Desarrollador FrontEnd con 2 años de experiencia en Frontend con React Y angular.Dominio en backend con Php , Nodejs y Sql server para base de datos. Enfocado al desarrollo visual y dinámico de soluciones.Poseo habilidades de ilustrador y conocimientos de diseño, añadiendo estas nociones a mi código.
        </p>

      </div>
    </div>
  )
}

export default AboutMe