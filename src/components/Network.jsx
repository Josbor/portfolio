import React from 'react'

const Network = ({ network }) => {

  const style = {

  }
  return (
    <>
      <div className='network-img'>
        <a href={network.url} target="_blank">
         <img src={network.image}   alt={network.name} />
        </a>
      </div>
    </>
  )
}

export default Network
