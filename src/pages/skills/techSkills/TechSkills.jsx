import React from 'react'
import { techSkills } from '../../../../data/projects'
import Skill from '../skill/skill'
import './TechSkills.scss'
const TechSkills = () => {
  return (
    <div className='tech-container'>
      {techSkills.frontend&&
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
      {techSkills.backend&&
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

    </div>
  )
}

export default TechSkills