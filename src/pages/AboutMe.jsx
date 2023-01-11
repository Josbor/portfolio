import { Button } from '@mui/material'
import React, { useId } from 'react'
import image from '../assets/profilePic.jpg'
import document from '../assets/doc/FronEnd_Developer_Jose_Borrego.pdf'
import Network from '../components/Network'
import { networks } from '../../data/projects'


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
        <div className='networks-content'>{networks.length>0&&networks.map(network=>
          <Network key={useId()} network={network}/>
          )}</div>
        <Button variant='outlined'color='primary' href={document}  download>Descargar CV</Button>
      </div>
    </div>
  )
}

export default AboutMe