import React, { useEffect, useState ,useRef} from 'react'




const NavigationBar = () => {
const [classname, setClassName] = useState('')
const headerRef=useRef();
    
const handleScroll=()=>{
     
      const {y}=header.getBoundingClientRect();
      console.log(y)
      const clase= y<=-661?'nav-container--top-second':'';
    
        
       classname==''&&setClassName(clase)
    
 
    }
    
    window.addEventListener('scroll',handleScroll)
  


  return (
    <div ref={headerRef} className={`nav-container ${classname}`}>
    <a className="nav-tab" href="#header">INICIO</a>
    <a className="nav-tab" href="#tab-sobre-mi">SOBRE MI</a>
    <a className="nav-tab" href="#tab-portafolio">PORTAFOLIO</a>
    <a className="nav-tab" href="#tab-habilidades">HABILIDADES</a>
   
    <span className="nav-tab-slider"></span>
</div>
  )
}

export default NavigationBar