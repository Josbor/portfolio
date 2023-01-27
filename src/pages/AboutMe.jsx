import { Button } from '@mui/material'
import React, { useId } from 'react'
import image from '../assets/profilePic.jpg'
import document from '../assets/doc/JOSE_BORREGO_CV.pdf'
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
        <p>Mi nombre es José Alberto Borrego y soy un desarrollador Front-End con dos años de experiencia trabajando con React y Angular. Tengo un dominio en el desarrollo de Backend con PHP, Node.js y SQL Server para bases de datos. Mi enfoque se centra en el desarrollo visual y dinámico de soluciones. Además, poseo habilidades como ilustrador y conocimientos en diseño, los cuales integro en mi trabajo como desarrollador.
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