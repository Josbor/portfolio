import React from 'react'
import Header from '../components/Header'
import NavigationBar from '../components/NavigationBar'
import AboutMe from './AboutMe'
import Portfolio from './portfolio/Portfolio'
import Skills from './skills/Skills'

const Main = () => {
    return (
        <>
            <section style={{ overflow: 'hidden !important' }} className="nav">

                <Header />
                <NavigationBar />
            </section>
            <main className="main">
                <section className="slider" id="tab-sobre-mi">
                    <AboutMe />
                </section>
                <section className="slider" id="tab-portafolio">
                    <Portfolio />
                </section>
                <section className="slider" id="tab-habilidades">
                    <Skills/>
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