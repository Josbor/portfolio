import React from 'react'
import Header from '../components/Header'
import AboutMe from './AboutMe'

const Main = () => {
  return (
    <>
          <section style={{ overflow: 'hidden !important' }} className="nav">

              <Header />
              <div className="nav-container">
                  <a className="nav-tab" href="#tab-sobre-mi">SOBRE MI</a>
                  <a className="nav-tab" href="#tab-portafolio">PORTAFOLIO</a>
                  <a className="nav-tab" href="#tab-habilidades">HABILIDADES</a>
                  <a className="nav-tab" href="#tab-contacto">CONTACTO</a>
                  <span className="nav-tab-slider"></span>
              </div>

          </section>
          <main className="main">
              <section className="slider" id="tab-sobre-mi">
                    <AboutMe/>
              </section>
              <section className="slider" id="tab-portafolio">
                  <h1>PORTAFOLIO</h1>
                  <h2>catalogo de proyectos que he realizado</h2>
              </section>
              <section className="slider" id="tab-habilidades">
                  <h1>HABILIDADES </h1>
                  <h2>mis habilidades tecnicas y skills</h2>
              </section>
              <section className="slider" id="tab-contacto">
                  <h1>CONTACTO</h1>
                  <h2>redes y formulario de contacto</h2>
              </section>


          </main>

    </>
  )
}

export default Main