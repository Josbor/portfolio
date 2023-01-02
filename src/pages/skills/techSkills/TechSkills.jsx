import React from 'react'
import { techSkills } from '../../../../data/projects'
import Skill from '../skill/Skill'
import './TechSkills.scss'
const TechSkills = () => {
  return (
    <div className='tech-container'>
      {(techSkills.frontend&&techSkills.frontend.length>0)&&
        <div className='techs'>
            <h3>Frontend</h3>
            <div className='tech-content'>
            {techSkills.frontend.map(front=>
              <Skill key={front.id} tech={front}/>
            )

            }
            </div>
        </div>
      }
      {(techSkills.backend&&techSkills.backend.length>0)&&
        <div className='techs'>
            <h3>Backend</h3>
            <div className='tech-content'>
            {techSkills.backend.map(back=>
              <Skill key={back.id} tech={back}/>
            )
                
            }
            </div>
        </div>
      }  
      
      {(techSkills.aditionals&&techSkills.aditionals.length>0)&&
        <div className='techs'>
            <h3>Aditionals</h3>
            <div className='tech-content'>
            {techSkills.aditionals.map(aditionals=>
              <Skill key={aditionals.id} tech={aditionals}/>
            )
                
            }
            </div>
        </div>
      }  

    </div>
  )
}

export default TechSkills