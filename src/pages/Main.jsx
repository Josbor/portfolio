import React from 'react'

import Header from '../components/Header'
import NavigationBar from '../components/NavigationBar'
import AboutMe from './AboutMe'
import Portfolio from './portfolio/Portfolio'
import Skills from './skills/Skills'
import HeaderBar from '../components/HeaderBar'

const Main = () => {

    return (
        <>
            <section id='header' style={{ overflow: 'hidden !important' }} className="nav ">

                <Header />
               
            </section>
            <HeaderBar/>
            <NavigationBar />
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
            </main>

        </>
    )
}

export default Main