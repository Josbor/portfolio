import React, { useCallback } from 'react'
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Header = () => {
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
    
    const particlesInit = useCallback(async engine => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);
     
      const particlesLoaded = useCallback(async container => {
        
    }, []);


  return (
    <>
          <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={{ ...options, autoPlay: true }}

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
    </>
  )
}

export default Header