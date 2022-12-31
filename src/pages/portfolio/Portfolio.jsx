import React from 'react'
import './Portfolio.scss'
import Gallery from '../../components/Gallery';
import { projects } from '../../../data/projects';

const Portfolio = () => {


  return (
    <>

    <Gallery slides={projects} />
    </>
  );
};

export default Portfolio;

