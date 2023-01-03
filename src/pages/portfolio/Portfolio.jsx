import React from 'react'
import './Portfolio.scss'
import Gallery from './gallery/Gallery';
import { projects } from '../../../data/projects';

const Portfolio = () => {


  return (
    <div className='portfolio-container'>
      {/* <h2>PORTAFOLIO</h2> */}
    <Gallery slides={projects} />
    </div>
  );
};

export default Portfolio;

