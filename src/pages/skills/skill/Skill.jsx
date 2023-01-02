import React from 'react'
import './Skill.scss'

const Skill = ({tech}) => {
  const {name,image}=tech;
  return (
    <div className='tech-image'>
          <img src={image} alt={name} />
          <p>{name}</p>
    </div>
  )
}

export default Skill