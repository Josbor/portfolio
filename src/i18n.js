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
                        "content":"My name is José Alberto Borrego and I am a Front-End Developer with expertise in React and Angular, specializing in dynamic interfaces, web optimization, and AI integration. Proven experience in ERP modules, legacy system modernization, and API-driven solutions. Core stack: React | Next.js | Node.js | Firebase | Tailwind CSS. Full-stack knowledge in PHP and SQL for scalable applications. Focus on clean code, performance, and intuitive UI/UX design.",
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
                        "content":"Mi nombre es José Alberto Borrego y soy un Desarrollador Front-End con experiencia en React y Angular, especializado en creación de interfaces dinámicas y optimización web. He desarrollado módulos ERP, integrado APIs con IA (ChatGPT) y modernizado sistemas legacy. Stack principal: React | Angular | Node.js | Firebase | Tailwind CSS. Conocimientos full-stack en PHP y SQL para soluciones escalables. Enfoque en código limpio, performance y diseño UI/UX intuitivo, con adaptabilidad a diferentes entornos tecnológicos.",
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