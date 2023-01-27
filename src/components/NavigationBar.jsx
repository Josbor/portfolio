import React, { useEffect, useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'



const NavigationBar = () => {
  const [classname, setClassName] = useState('')
  const {t}=useTranslation()



  useEffect(() => {

    const header = document.querySelector('#nav').getBoundingClientRect().y
    const  navs= document.querySelectorAll('.nav-tab')
    const inicio = document.querySelector('#header').getBoundingClientRect().y
      const about = document.querySelector('#tab-sobre-mi').getBoundingClientRect().y
      const portfolio = document.querySelector('#tab-portafolio').getBoundingClientRect().y
      const skills = document.querySelector('#tab-habilidades').getBoundingClientRect().y
    const handleScroll = () => {
      //position from each section
      
     
      const removeClass=()=>{
        navs.forEach(n=>{
          n.classList.remove('nav--selected') 
         })
      }
      //position of the windows
      const p = window.scrollY;

  
      if (p>inicio){
        
        removeClass();
        navs[0].classList.add('nav--selected')
        
      }
      if (p>(about*0.9)){
        
        removeClass();
        navs[1].classList.add('nav--selected')
        
      }
      if (p>(portfolio*0.9)){
        
        removeClass();
        navs[2].classList.add('nav--selected')
        
      }
      if (p>(skills*0.9)){
        
        removeClass();
        navs[3].classList.add('nav--selected')
        
      }
    
    
    
      const clase = (p > header) ? 'nav-container--top-second' : '';
      classname == '' && setClassName(clase)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)

    }
  }, [])



  return (
    <div id='nav' style={{textTransform:'uppercase'}} className={`nav-container ${classname}`}>
      <a className="nav-tab" href="#header">{t('header.nav-home')}</a>
      <a className="nav-tab" href="#tab-sobre-mi">{t('header.nav-about')}</a>
      <a className="nav-tab" href="#tab-portafolio">{t('header.nav-portfolio')}</a>
      <a className="nav-tab" href="#tab-habilidades">{t('header.nav-skills')}</a>

      <span className="nav-tab-slider"></span>
    </div>
  )
}

export default NavigationBar