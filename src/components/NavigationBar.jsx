import React from 'react'




const NavigationBar = () => {
  return (
    <div className="nav-container">
    <a className="nav-tab" href="#tab-sobre-mi">SOBRE MI</a>
    <a className="nav-tab" href="#tab-portafolio">PORTAFOLIO</a>
    <a className="nav-tab" href="#tab-habilidades">HABILIDADES</a>
   
    <span className="nav-tab-slider"></span>
</div>
  )
}

export default NavigationBar