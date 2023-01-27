import { Button } from '@mui/material'
import React, { useId } from 'react'
import image from '../assets/profilePic.jpg'
import document from '../assets/doc/JOSE_BORREGO_CV.pdf'
import Network from '../components/Network'
import { networks } from '../data/projects'
import { useTranslation } from 'react-i18next'

const AboutMe = () => {
  const {t}=useTranslation()
  return (
    <div className='about-container'>

      <div className='about-image-container'>
        <div className='about-image'>
          <img src={image}  />
        </div>
      </div>
      <div className='about-content'>
        <h2 style={{textTransform:'uppercase'}}> {t('about.tittle')}</h2>
        <p>
          {t('about.content')}
        </p>
        <div className='networks-content'>{networks.length>0&&networks.map(network=>
          <Network key={useId()} network={network}/>
          )}</div>
        <Button variant='outlined'color='primary' href={document}  download>{t('about.cvDownload')}</Button>
      </div>
    </div>
  )
}

export default AboutMe