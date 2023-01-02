import React from 'react'
import { softSkills } from '../../../../data/projects'
import Skill from '../skill/Skill'
import './SoftSkills.scss'

const SoftSkills = () => {
  return (
    <div className='soft-container'>
      {(softSkills && softSkills.length > 0) &&


      
        softSkills.map(soft =>
          <Skill key={soft.id} tech={soft} />
        )

      


      }

    </div>
  )
}

export default SoftSkills