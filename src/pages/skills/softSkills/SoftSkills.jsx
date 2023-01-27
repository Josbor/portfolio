import React from 'react'
import { useTranslation } from 'react-i18next'
import { softSkills } from '../../../data/projects'
import Skill from '../skill/Skill'
import './SoftSkills.scss'

const SoftSkills = () => {
  const {i18n}=useTranslation()
  return (
    <div className='soft-container'>
      {(softSkills && softSkills.length > 0) &&
        softSkills.map(soft =>
          <Skill key={soft.id} tech={{name:soft.content[i18n.language.substring(0,2)].name,image:soft.image}} />
        )

      


      }

    </div>
  )
}

export default SoftSkills