import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import './App.scss'

const options={
  
    background: {
        color: {
            value: "inherit",
        },
    },
    fpsLimit: 60,
   
    particles: {
        color: {
            value: "#36c2d4",
        },
        links: {
            color:"#36c2d4",
            distance: 200,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        
        collisions: {
            enable: false,
        },
        move: {
            directions: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 2,
            straight: true,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,

}
function App() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);
 
  const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  return (
    <div  className="App">
      
<section style={{overflow:'hidden !important'}}  className="nav">
<Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{...options,  autoPlay:true}}
            
        />
  <h1>FRONTEND DEVELOPER</h1>
        <h3 className="span loader">
          <span className="m">J</span>
          <span className="m">O</span>
          <span className="m">S</span>
          <span className="m">E</span>
          <span className="m">&nbsp;</span>
          <span className="m">B</span>
          <span className="m">O</span>
          <span className="m">R</span>
          <span className="m">R</span>
          <span className="m">E</span>
          <span className="m">G</span>
          <span className="m">O</span>
          </h3>
         
        <div className="nav-container"><a className="nav-tab" href="#tab-svelte">SVELTE</a><a className="nav-tab" href="#tab-esbuild">ESBUILD</a><a className="nav-tab" href="#tab-next">NEXT.JS</a><a className="nav-tab" href="#tab-typescript">TYPESCRIPT</a><a className="nav-tab" href="#tab-vite">VITE</a><span className="nav-tab-slider"></span></div>
       
</section>
<main className="main">
  <section className="slider" id="tab-svelte">
    <h1>SVELTE</h1>
    <h2>another frontend JS framework</h2>
  </section>
  <section className="slider" id="tab-esbuild">
    <h1>ESBUILD</h1>
    <h2>an extremely fast JavaScript bundler</h2>
  </section>
  <section className="slider" id="tab-next">
    <h1>NEXT.JS</h1>
    <h2>framework for Production</h2>
  </section>
  <section className="slider" id="tab-typescript">
    <h1>TYPESCRIPT</h1>
    <h2>giving you better tooling at any scale</h2>
  </section>
  <section className="slider" id="tab-vite">
    <h1>VITE</h1>
    <h2>a frontend build tool</h2>
  </section>
</main>


    </div>

    
  )
}

export default App
