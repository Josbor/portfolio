import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";


i18next
    .use(initReactI18next)
    .use(languageDetector)
    .init({
        debug:true,
        fallbackLng:'es',
        resources:{
            en:{
                translation:{
                    "header":{
                        "nav-home":"home",
                        "nav-about":"about me",
                        "nav-portfolio":"portfolio",
                        "nav-skills":"skills",

                    },
                    "about":{
                        "tittle":"about me",
                        "content":"My name is José Alberto Borrego and I am a Front-End developer with two years of experience working with React and Angular. I have a mastery in Backend development with PHP, Node.js, and SQL Server for databases. My focus is on the visual and dynamic development of solutions. Additionally, I possess skills as an illustrator and knowledge in design, which I integrate into my work as a developer.",
                        "cvDownload":"download cv"

                    },
                    "portfolio":{
                        "repository":"repository",
                        "deploy":"view online"
                    },
                    "skills":{
                        "tech-skills":"tech skills",
                        "soft-skills":"soft skills",
                    }
                }
            },
            es:{
                translation:{
                    "header":{
                        "nav-home":"inicio",
                        "nav-about":"sobre mi",
                        "nav-portfolio":"portafolio",
                        "nav-skills":"habilidades",

                    },
                    "about":{
                        "tittle":"sobre mi",
                        "content":"Mi nombre es José Alberto Borrego y soy un desarrollador Front-End con dos años de experiencia trabajando con React y Angular. Tengo un dominio en el desarrollo de Backend con PHP, Node.js y SQL Server para bases de datos. Mi enfoque se centra en el desarrollo visual y dinámico de soluciones. Además, poseo habilidades como ilustrador y conocimientos en diseño, los cuales integro en mi trabajo como desarrollador.",
                        "cvDownload":"descargar cv"
                    },
                    "portfolio":{
                        "repository":"repositorio",
                        "deploy":"ver online"
                    },
                    "skills":{
                        "tech-skills":"tecnicas",
                        "soft-skills":"blandas",
                    }

                }
            }
        }
    })